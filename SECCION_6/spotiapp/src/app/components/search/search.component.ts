import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() artistas: any[] = [];
  loading = false;
  error=false;
  mensajeError='';

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.loading=true;
    this.spotifyService.getArtistas(termino)
      .subscribe( (data: any) => {
        console.log(data);
        this.artistas=data;
      }, (errorServicio) => {
        this.error=true;
        this.mensajeError=errorServicio.error.error.message;
      });
    this.loading=false;
  }
}
