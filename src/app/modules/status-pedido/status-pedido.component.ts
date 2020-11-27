import { Component, OnInit } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';

export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true});
}
@Component({
  selector: 'app-status-pedido',
  templateUrl: './status-pedido.component.html',
  styleUrls: ['./status-pedido.component.css'],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})
export class StatusPedidoComponent implements OnInit {
  max = 200;
  showWarning: any;
  dynamic: any;
  type: any;
  constructor() {
    this.random();
  }

  ngOnInit(): void {
  }
  random(): void {
    const value = Math.floor(Math.random() * 100 + 1);
    let type: string;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    this.dynamic = value;
    this.type = type;
  }
}
