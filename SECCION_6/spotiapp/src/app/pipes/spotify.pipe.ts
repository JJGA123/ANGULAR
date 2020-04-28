import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spotify'
})
export class SpotifyPipe implements PipeTransform {

  transform(spotifyUrl: string): string {
    try {
      console.log('Spotify ' + spotifyUrl);
      if(spotifyUrl.length>0){
        return spotifyUrl;
      }
    } catch (error) {
      return "";
    }
  }

}
