import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any []= [];
  loading = true;
  constructor(private router: ActivatedRoute,
              private spotifyService: SpotifyService) { 
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
    this.loading=false;
  }

  ngOnInit(): void {
  }

  getArtista(id: string){
    this.spotifyService.getArtista(id)
      .subscribe( (data: any) => {
        this.artista = data;
      });
  }

  getTopTracks(id: string){
    this.spotifyService.getToTracks(id)
      .subscribe( (data: any) => {
        this.topTracks=data;
        console.log(data);
      });
  }
}
