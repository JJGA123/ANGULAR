import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Capitán America';
  arreglo = [1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 50,
    direccion: {
      calle: 'Primera',
      casa: '71'
    }
  }

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  fecha = new Date();
  idioma = 'es';

  setIdioma(idioma: string){
    this.idioma = idioma;
  }

  nombre2 = 'JhoN jAIro GALvis arenaLeS';

  video = 'https://www.youtube.com/embed/utsBfZm9_qI';

  mostrarC = false;

  mostrar = "Mostrar";

  setContrasena(){
    if(!this.mostrarC){
      this.mostrarC = true;
      this.mostrar = 'Ocultar';
    }else{
      this.mostrarC = false;
      this.mostrar = 'Mostrar';
    }
  }
}
