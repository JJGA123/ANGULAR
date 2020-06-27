import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private validadores: ValidadoresService) {
    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListener();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5), this.validadores.noHerrera]],
      correo: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      usuario: ['', [Validators.required, Validators.minLength(5)], this.validadores.existeUsuario],
      contrasena: ['', [Validators.required, Validators.minLength(5)]],
      contrasenarep: ['', [Validators.required, Validators.minLength(5)]],
      direccion: this.fb.group({
        distrito: ['', [Validators.required, Validators.minLength(5)]],
        ciudad: ['', [Validators.required, Validators.minLength(5)]]
      }),
      pasatiempos: this.fb.array([])
    });
  }

  guardar(){
    console.log(this.form);
  }

  cargarDataAlFormulario(){
    /*this.form.setValue({
      nombre: 'Jhon',
      apellido: 'Galvis',
      correo: 'jhongalvis2@gmail.com',
      direccion: {
        distrito: 'Norte de Santander',
        ciudad: 'Cúcuta'
      }
    });
    */

    this.form.reset({
      nombre: 'Jhon',
      apellido: 'Galvis',
      correo: 'jhongalvis2@gmail.com',
      contrasena: '12345',
      contrasenarep: '12345',
      usuario: '',
      direccion: {
        distrito: 'Norte de Santander',
        ciudad: 'Cúcuta'
      }
    });
  }

  agregarPasatiempos(){
    this.pasatiempos.push(this.fb.control('Nuevo elemento', Validators.required));
  }

  borrarPasatiempo(i: number){
    this.pasatiempos.removeAt(i);
  }

  crearListener(){
    this.form.valueChanges.subscribe( valor => {
      console.log(valor);
    });
  }

  get nombreNoValido() {
    return this.form.get('nombre').invalid && this.form.get('nombre').touched
  }

  get apellidoNoValido() {
    return this.form.get('apellido').invalid && this.form.get('apellido').touched
  }

  get correoNoValido() {
    return this.form.get('correo').invalid && this.form.get('correo').touched
  }

  get usuarioNoValido() {
    return this.form.get('usuario').invalid && this.form.get('usuario').touched
  }

  get distritoNoValido() {
    return this.form.get('direccion.distrito').invalid && this.form.get('direccion.distrito').touched
  }

  get ciudadNoValido() {
    return this.form.get('direccion.ciudad').invalid && this.form.get('direccion.ciudad').touched
  }

  pasatiempoNoValido(i: number): boolean {
    // console.log(this.pasatiempos.at(i));
    return this.pasatiempos.at(i).invalid && (this.pasatiempos.at(i).touched || this.pasatiempos.at(i).dirty);
  }

  get contrasenaNoValido() {
    return this.form.get('contrasena').invalid && this.form.get('contrasena').touched
  }

  get contrasenaRepNoValido() {
    return !this.validadores.passworsIguales(this.form.get('contrasena').value, this.form.get('contrasenarep').value);
  }

  get pasatiempos(){
    return this.form.get('pasatiempos') as FormArray;
  }
}
