import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './modules/pagina-principal/pagina-principal.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { LoginComponent } from './modules/login/login.component';
import { RecuperarComponent } from './modules/recuperar/recuperar.component';
import { RegistrarComponent } from './modules/registrar/registrar.component';
import { TiendaComponent } from './modules/tienda/tienda.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ContactanosComponent } from './modules/contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    NavbarComponent,
    LoginComponent,
    RecuperarComponent,
    RegistrarComponent,
    TiendaComponent,
    NosotrosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
