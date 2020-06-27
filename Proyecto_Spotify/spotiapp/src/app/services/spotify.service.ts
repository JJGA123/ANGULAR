import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    this.getNewReleases();
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer QC8JxLZILrP1axeJ0udOzjZLL3afYtHdw8Xg_0tn7AL4opy7jkp402D8pRMBC5TCgufEszuzorJNdf87Sc'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe( map( data => {
      return data['albums'].items;
    } ));
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&market=ES&limit=10&offset=5`)
    .pipe( map( data => data['artists'].items));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getToTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( data => data['tracks']));
  }

}
