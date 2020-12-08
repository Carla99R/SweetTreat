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
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AuthService } from './service/auth.service';
import { BolsaComponent } from './modules/bolsa/bolsa.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { StatusPedidoComponent } from './modules/status-pedido/status-pedido.component';
import { EditorPedidosComponent } from './modules/editor-pedidos/editor-pedidos.component';
import { ProductoComponent } from './modules/producto/producto.component';
import { MetodoPagoComponent } from './modules/metodo-pago/metodo-pago.component';
import {ModalModule} from 'ngx-bootstrap/modal';

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
    ContactanosComponent,
    BolsaComponent,
    PerfilComponent,
    StatusPedidoComponent,
    EditorPedidosComponent,
    ProductoComponent,
    MetodoPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
