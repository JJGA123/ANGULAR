import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/editar/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/detalle/usuario-detalle.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { 
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: USUARIO_ROUTES},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);