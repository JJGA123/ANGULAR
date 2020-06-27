import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../../models/file-item';
import { CargaImagenesServiceService } from '../../servives/carga-imagenes-service.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {
  estaSobreElemento = false;
  archivos: FileItem [] = [];
  constructor(public cargaService: CargaImagenesServiceService) { }

  ngOnInit(): void {
  }

  cargarImagenes(){
    this.cargaService.cargarImagenesFirebase(this.archivos);
  }

  pruebaSobreElemento(event){
    console.log(event);
  }

  limpiar(){
    this.archivos=[];
  }
}
