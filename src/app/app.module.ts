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
import { MetodoRetiroComponent } from './modules/metodo-retiro/metodo-retiro.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FacturaComponent } from './modules/factura/factura.component';
import { NavbarAdminComponent } from './navigation/navbar-admin/navbar-admin.component';
import { InventarioComponent } from './modules/admin/inventario/inventario.component';
import { RegistroComponent } from './modules/admin/registro/registro.component';
import { AgregarAdminComponent } from './modules/admin/agregar-admin/agregar-admin.component';
import { AgregarProductoComponent } from './modules/admin/agregar-producto/agregar-producto.component';


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
    MetodoPagoComponent,
    MetodoRetiroComponent,
    FacturaComponent,
    NavbarAdminComponent,
    InventarioComponent,
    RegistroComponent,
    AgregarAdminComponent,
    AgregarProductoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
