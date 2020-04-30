import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
   }

  getLista() {
    return this.listas;
  }

  crearLista(titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  obtenerLista(id: string | number){
    id = Number(id);
    return this.listas.find(listaData => {
      return listaData.id === id;
    });
  }

  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }

  borrarLista(lista: Lista) {
    this.listas = this.listas.filter( listaData => {
      return listaData.id !== lista.id;
    });
    this.guardarStorage();
  }

  editarLista(lista: Lista, nuevoTitulo: string) {
    console.log(lista);
    this.listas.filter( listaData => {
      return listaData.id === lista.id;
    });
  }
}
