import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Lista } from '../../models/lista.model';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  
  @ViewChild(IonList, { static: true}) l: IonList;
  @Input() terminada = true;
  listaDeseos: Lista[] = [];
  constructor(private deseosService: DeseosService,
              private router: Router,
              private alertController: AlertController) {
      this.listaDeseos = this.deseosService.getLista();
  }

  ngOnInit() {}

  detalleLista(lista: Lista) {
    this.router.navigateByUrl(`tabs/agregar/${lista.id}`);
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
    this.listaDeseos = this.deseosService.getLista();
  }

  async editarLista(lista: Lista) {
    const alert = await this.alertController.create({
      header: 'Editar titulo',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
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
            if ( data.titulo.length === 0 ) {
              return;
            } else {
              lista.titulo = data.titulo;
              this.deseosService.guardarStorage();
              this.l.closeSlidingItems();
            }
          }
        }
      ]
    });

    alert.present();
  }
}
