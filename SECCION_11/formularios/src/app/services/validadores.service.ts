import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs';
import { rejects } from 'assert';

interface ErrorValidate {
  [s: string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control: FormControl): {[s: string]: boolean}{
    if (control.value?.toLowerCase() === 'herrera') {
      return {
        noHerrera: true
      }
    }

    return null;
  }

  passworsIguales(contrasena: string, contrasenarep: string){
    console.log(contrasena + contrasenarep);
    if (contrasena === contrasenarep) {
      return true;
    } else {
      return false;
    }
  }

  existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate> {
    if (!control.value) {
      return Promise.resolve(null)
    }

    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        if (control.value === 'strider') {
          resolve({existe: true});
        } else {
          resolve(null);
        }
      }, 3500);
    });
  }
}
