import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean): string {
    if(!mostrar){
      let contraseña = value.length;
      let oculta = '';
      for(let i=0;i<value.length;i++){
        oculta += '*';
      }
      value = oculta;
    }else{
      return value;
    }

    return value;
  }

}
