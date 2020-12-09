import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  product: any;
  id: any;
  user: any;

  constructor(private route: ActivatedRoute, private authService: AuthService,  private auth: AngularFireAuth) {
    this.authService.authStateUser().subscribe(a => {
      this.user = a;
      console.log(this.user.uid);
    });
   }

  async ngOnInit(): Promise<void> {
      let id = this.route.snapshot.params.id;
      this.id = id;
      const productRef = await firebase.firestore().collection('productos').doc(id).get();
      this.product = productRef.data();
      console.log(this.product.nombre);
  }

  async agregarDeseo(){
    console.log(this.id);
    const bolsas = 1;
    const db = await firebase.firestore();
    await db.collection("deseos").add({
      usuario: this.user.uid,
      producto: this.id,
      cantidad: bolsas
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
    }

    async agregarCarrito(){
      const bolsas = 1;
      const db = await firebase.firestore();
      await db.collection("carritos").add({
        usuario: this.user.uid,
        producto: this.id,
        cantidad: bolsas
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
      }

}
