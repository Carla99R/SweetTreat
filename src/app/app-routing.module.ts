import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaginaPrincipalComponent} from './modules/pagina-principal/pagina-principal.component';
import {TiendaComponent} from './modules/tienda/tienda.component';
import {NosotrosComponent} from './modules/nosotros/nosotros.component';
import {ContactanosComponent} from './modules/contactanos/contactanos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: '/inicio', pathMatch: 'full'},
      {path: 'inicio', component: PaginaPrincipalComponent},
    ],
    component: PaginaPrincipalComponent
  },
  {
    path: 'tienda',
    component: TiendaComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'contactanos',
    component: ContactanosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
