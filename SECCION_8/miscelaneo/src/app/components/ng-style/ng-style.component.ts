import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo, esta es una etiqueta.
    </p>

    <button class="btn btn-primary mx-1" (click)="tamano = tamano +5">
      +
    </button>
    <button *ngIf="tamano>5" class="btn btn-primary" (click)="tamano = tamano - 5">
      -
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  tamano = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
