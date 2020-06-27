import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading=true;
  error=false;
  mensajeError='';

  constructor(private http: HttpClient, private spotifyService:SpotifyService) { 
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe(paises => {
      //console.log(paises);
    });
    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        this.nuevasCanciones = data;
        console.log(data);
      }, (errorServicio) => {
        this.error=true;
        this.mensajeError=errorServicio.error.error.message;
      });
      this.loading=false;
  }

  ngOnInit(): void {
  }

}
