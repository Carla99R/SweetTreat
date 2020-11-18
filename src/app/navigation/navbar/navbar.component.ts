import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  flag = false;
  help = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  recuperar(): void {
    this.flag = !this.flag;
    this.help = true;
  }
  registrar(): void {
    this.help = !this.help;
    this.flag = true;
  }
}
