import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor(private deseosService: DeseosService,
              private route: ActivatedRoute,
              private alertController: AlertController,
              private router: Router,
              public location: Location) {
    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.obtenerLista(listaId);
  }

  ngOnInit() {
  }

  agregarItem(){
    if( this.nombreItem.length === 0 ) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem){
    const pendiente = this.lista.items.filter(itemData => {
      return !itemData.completado;
    }).length;

    if ( pendiente === 0 ) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }
    this.deseosService.guardarStorage();
  }

  borrar(i: number){
    this.lista.items.splice(i,1);
    this.deseosService.guardarStorage();
  }

  async editar(i: number){
    const alert = await this.alertController.create({
      header: 'Editar',
      inputs: [
        {
          name: 'nombreItem',
          type: 'text',
          placeholder: 'Nuevo nombre',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            if ( data.nombreItem.length === 0 ) {
              return;
            } else {
              this.lista.items[i].desc = data.nombreItem;
              this.router.navigateByUrl(`tabs/agregar/${this.lista.id}`);
              this.deseosService.guardarStorage();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
