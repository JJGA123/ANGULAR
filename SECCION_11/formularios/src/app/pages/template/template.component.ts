import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Jhon ',
    apellido: 'Galvis',
    correo: 'jhongalvis2@gmail.com',
    pais: 'COL',
    genero: 'F'
  }

  paises: any [] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(paises => {
      this.paises = paises;
      this.paises.unshift({
        nombre: 'Seleccione País',
        codigo: ''
      });
    });
  }

  guardar(form: NgForm){
    console.log(form);
  }
}
