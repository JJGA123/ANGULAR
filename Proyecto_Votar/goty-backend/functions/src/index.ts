import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firestore-grafica-2024e.firebaseio.com"
});

const bd = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) => {
  response.json('Hola mundo desde funciones de firebase!');
 });

 export const getGOTY = functions.https.onRequest( async(request, response) => {
  //const nombre = request.query.nombre || 'Sin nombre';
  const gotyRef = bd.collection('goty');
  const docsSnap = await gotyRef.get();

  const juegos = docsSnap.docs.map(doc => doc.data());
  
  response.json(juegos);
 });

 const app = express();
 app.use(cors({origin: true}));

 app.get('/goty', async(req, res) => {
  const gotyRef = bd.collection('goty');
  const docsSnap = await gotyRef.get();

  const juegos = docsSnap.docs.map(doc => doc.data());
  
  res.json(juegos);
 });

app.post('/goty/:id', async(req,res) => {
  
  const id = req.params.id;
  const gameRef = bd.collection('goty').doc(id);
  const gameSnap = await gameRef.get();
  
  if(!gameSnap.exists) {
    res.status(400).json({
      ok:false,
      mensaje: 'No existe un juego con ese ID ' + id
    });
  } else {
    const antes = gameSnap.data() || {votos: 0};
    await gameRef.update({
      votos: antes.votos+1
    });

    res.json({
      ok:true,
      mensaje: `Gracias por tu voyo a ${antes.name}`
    });
  }
});


export const api = functions.https.onRequest(app);