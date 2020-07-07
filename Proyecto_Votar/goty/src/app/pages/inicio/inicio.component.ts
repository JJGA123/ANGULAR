import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Game } from '../../interfaces/interfaces';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  juegos: any[] = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
      .pipe(
        map((resp: Game[]) => {
          return resp.map(({name, votos}) => ({name, value: votos}));
        })
      )
      .subscribe(resp => {
      console.log(resp);
      this.juegos = resp;
    });
  }

}
