import { RouterModule, Routes } from '@angular/router';
import { UsuarioNuevoComponent } from './nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from './editar/usuario-editar.component';
import { UsuarioDetalleComponent } from './detalle/usuario-detalle.component';

export const USUARIO_ROUTES: Routes = [
    { path: 'nuevo', component: UsuarioNuevoComponent },
    { path: 'editar', component: UsuarioEditarComponent },
    { path: 'detalle', component: UsuarioDetalleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];
