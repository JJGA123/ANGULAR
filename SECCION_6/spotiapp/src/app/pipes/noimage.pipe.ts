import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    try {
      if( images.length > 0 ){
        return images[0].url;
      }else{
        return 'assets/img/noimage.png';
      }
    } catch (error) {
      return 'assets/img/noimage.png';
    }
    
  }

}
