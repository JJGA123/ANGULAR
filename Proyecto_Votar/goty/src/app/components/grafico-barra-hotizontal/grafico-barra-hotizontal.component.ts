import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-hotizontal',
  templateUrl: './grafico-barra-hotizontal.component.html',
  styleUrls: ['./grafico-barra-hotizontal.component.css']
})
export class GraficoBarraHotizontalComponent implements OnDestroy{

  @Input() results: any[] = [];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  //intervalo;

  public onSelect(event) {
    console.log(event);
  }

  constructor() {
    /*this.intervalo = setInterval( () => {
      console.log('tick');
      const newResult = [...this.results];

      for (let i in newResult){
        newResult[i].value = Math.round(Math.random()*500);
      /}

      this.results = [...newResult];
    }, 1500);*/
    
  }

  ngOnDestroy() {
    //clearInterval(this.intervalo);
  }

  

}
