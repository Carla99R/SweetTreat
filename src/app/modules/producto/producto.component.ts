import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  product: any;
  private route!: ActivatedRoute;
  constructor() { }

  ngOnInit(): void {
      this.product = firebase.firestore().collection('productos').where("id", "==", this.route.params);
      console.log(this.product.nombre);
  }

}
