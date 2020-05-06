import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  apiKey='AIzaSyCocUsiqvS3JLOZgGa2PnSkUK2W1LQonoI';
  usaerToken = '';
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { 
    this.leerToken();
  }

  logOut() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe (
      map( resp => {
        console.log('Entró en el map login');
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    ).pipe (
      map( resp => {
        console.log('Entró en el map nuevo');
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  private guardarToken(idToken: string) {
    this.usaerToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira',hoy.getTime().toString());
  }

  leerToken(){
    if (localStorage.getItem('toekn')) {
      this.usaerToken = localStorage.getItem('token');
    } else {
      this.usaerToken = '';
    }
    return this.usaerToken;
  }

  isAuthenticate(): boolean {
    if (this.usaerToken.length > 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
