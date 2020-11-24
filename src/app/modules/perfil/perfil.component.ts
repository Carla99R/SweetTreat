import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: any;
  constructor( private authService: AuthService) {
    this.authService.authStateUser().subscribe(a => {
      this.user = a;
    });
  }

  ngOnInit(): void {
  }

}
