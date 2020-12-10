import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaginaPrincipalComponent} from './modules/pagina-principal/pagina-principal.component';
import {TiendaComponent} from './modules/tienda/tienda.component';
import {NosotrosComponent} from './modules/nosotros/nosotros.component';
import {ContactanosComponent} from './modules/contactanos/contactanos.component';
import {BolsaComponent} from './modules/bolsa/bolsa.component';
import {PerfilComponent} from './modules/perfil/perfil.component';
import {StatusPedidoComponent} from './modules/status-pedido/status-pedido.component';
import { AuthGuard } from './guards/auth.guard';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {EditorPedidosComponent} from './modules/editor-pedidos/editor-pedidos.component';
import {ProductoComponent} from './modules/producto/producto.component';
import {MetodoPagoComponent} from './modules/metodo-pago/metodo-pago.component';
import {MetodoRetiroComponent} from './modules/metodo-retiro/metodo-retiro.component';
import {FacturaComponent} from './modules/factura/factura.component';

const redirectUnauththorizedToLogin = () => redirectUnauthorizedTo(['contactanos']);
const redirectLoggedInToTienda = () => redirectLoggedInTo(['tienda']);

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
    component: TiendaComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'contactanos',
    component: ContactanosComponent,
  },
  {
    path: 'bolsa',
    component: BolsaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'StatusPedidos',
    component: StatusPedidoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editorPedido',
    component: EditorPedidosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'producto/:id',
    component: ProductoComponent,
  },
  {
    path: 'metodoPago',
    component: MetodoPagoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'metodoRetiro',
    component: MetodoRetiroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'factura',
    component: FacturaComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
