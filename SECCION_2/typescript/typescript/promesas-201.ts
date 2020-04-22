(()=>{


    const retirarDinero = ( montoRetirar: number ): Promise<number> => {

        let dineroActual = 1000;

        return new Promise( (resolve, reject) => {

            if ( montoRetirar > dineroActual  ) {
                reject('No hay suficientes fondos');
            } else {
                dineroActual -= montoRetirar;
                resolve( dineroActual );
            }

        });

    }



    retirarDinero( 500 )
        .then( montoActual => console.log(`Me queda ${ montoActual }`) )
        .catch( console.warn )


})();



