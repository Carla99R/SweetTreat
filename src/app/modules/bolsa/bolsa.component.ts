import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-bolsa',
  templateUrl: './bolsa.component.html',
  styleUrls: ['./bolsa.component.css']
})
export class BolsaComponent implements OnInit {
  message: string;
  carrito: any;
  user: any;
  deseo: any;
  productoDeseo: any[] = [];
  productoCarrito: any[] = [];

  //modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private authService: AuthService) {
    this.message = '';
    this.authService.authStateUser().subscribe(a => {
      this.user = a;
      console.log(this.user.uid);
    });
  }

  async ngOnInit(): Promise<void> {
    const productsCollection = firebase.firestore().collection("productos");
    const carritoCollection = firebase.firestore().collection("carritos").where("usuario", "==", this.user.uid).get();
    this.carrito = (await carritoCollection).docs.map(doc => ({id: doc.id, ...doc.data()}));
    const deseoCollection = firebase.firestore().collection("deseos").where("usuario", "==", this.user.uid).get();
    this.deseo = (await deseoCollection).docs.map(doc => ({id: doc.id, ...doc.data()}));

    for (let index = 0; index < this.deseo.length; index++) {
      const producto = productsCollection.doc(this.deseo[index].producto).get();
      this.productoDeseo.push((await producto).data());
    }
    for (let index = 0; index < this.deseo.length; index++) {
      const producto2 = productsCollection.doc(this.carrito[index].producto).get();
      this.productoCarrito.push((await producto2).data());
    }
  }

  openModal(template: TemplateRef<any>): void {
    //this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.message = 'Confirmed!';
    //this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    //this.modalRef.hide();
  }

}
