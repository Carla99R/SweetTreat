import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';



@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit {
  products: any;
  constructor() {
    
  }

  async ngOnInit(): Promise<void> {
      const productsCollection = firebase.firestore().collection("productos").get();
      this.products = (await productsCollection).docs.map(doc => doc.data());
  }
}


