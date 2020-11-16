import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaginaPrincipalComponent} from './modules/pagina-principal/pagina-principal.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: PaginaPrincipalComponent},
    ],
    component: PaginaPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
