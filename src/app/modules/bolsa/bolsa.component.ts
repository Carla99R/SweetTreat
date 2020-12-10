
import { Component, OnInit, TemplateRef } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-bolsa',
  templateUrl: './bolsa.component.html',
  styleUrls: ['./bolsa.component.css']
})
export class BolsaComponent implements OnInit {

  carrito: any;
  user: any;
  deseo: any;
  productoDeseo: any[] = [];
  productoCarrito: any[] = [];

  constructor(private authService: AuthService) {
  }

  async ngOnInit(): Promise<void> {
    const productsCollection = firebase.firestore().collection('productos');
    const carritoCollection = firebase.firestore().collection('carritos').where('usuario', '==', this.user.uid).get();
    this.carrito = (await carritoCollection).docs.map(doc => ({id: doc.id, ...doc.data()}));
    const deseoCollection = firebase.firestore().collection('deseos').where('usuario', '==', this.user.uid).get();
    this.deseo = (await deseoCollection).docs.map(doc => ({id: doc.id, ...doc.data()}));

    for (let index = 0; index < this.deseo.length; index++) {
      const producto = productsCollection.doc(this.deseo[index].producto).get();
      this.productoDeseo.push((await producto).data());
    }
    for (let index = 0; index < this.carrito.length; index++) {
      const producto2 = productsCollection.doc(this.carrito[index].producto).get();
      this.productoCarrito.push((await producto2).data());
    }
  }

  async agregarCarrito(i: any){
    const db = await firebase.firestore();
    await db.collection('carritos').add({
      usuario: this.user.uid,
      producto: this.deseo[i].producto,
      cantidad: this.deseo[i].cantidad
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      this.eliminarDeseo(i);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
    }


  async eliminarDeseo(i: any){
    const db = await firebase.firestore();
    db.collection('deseos').doc(this.deseo[i].id).delete().then(function() {
      console.log('Document successfully deleted!');
      }).catch(function(error) {
      console.error('Error removing document: ', error);
  });
    }

  async eliminarCarrito(i: any){
      const db = await firebase.firestore();
      db.collection('carritos').doc(this.carrito[i].id).delete().then(function() {
        console.log('Document successfully deleted!');
        }).catch(function(error) {
        console.error('Error removing document: ', error);
    });
      }


}
