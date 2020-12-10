import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  carrito: any;
  user: any;
  productoCarrito: any[] = [];
  total: any = 0;
  
  constructor(private authService: AuthService) {
    this.authService.authStateUser().subscribe(a => {
      this.user = a;
      console.log(this.user.uid);
    });
  }

  async ngOnInit(): Promise<void> {
    const productsCollection = firebase.firestore().collection('productos');
    const carritoCollection = firebase.firestore().collection('carritos').where('usuario', '==', this.user.uid).get();
    this.carrito = (await carritoCollection).docs.map(doc => ({id: doc.id, ...doc.data()}));
    for (let index = 0; index < this.carrito.length; index++) {
      const producto2: any = (await productsCollection.doc(this.carrito[index].producto).get()).data();
      this.productoCarrito.push(producto2);
      this.total+=producto2.precio;;
    }

  
  }

}
