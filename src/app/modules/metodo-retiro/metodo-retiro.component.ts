import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodo-retiro',
  templateUrl: './metodo-retiro.component.html',
  styleUrls: ['./metodo-retiro.component.css']
})
export class MetodoRetiroComponent implements OnInit {
  flag = false;
  constructor() { }

  ngOnInit(): void {
  }
  delivery(): void {
    this.flag = !this.flag;
  }
  pickup(): void {
    this.flag = !this.flag;
  }
  visibilidad(selector: any, visible: any) {
    const elemento = document.querySelector(selector);
    console.log(elemento);
    if (elemento != null) {
      elemento.style.display = visible?'block':'none';
    }
  }
}
