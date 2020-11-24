import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { AuthService } from 'src/app/service/auth.service';
import { User } from '../../shared/models/user.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  flag = false;
  help = true;
  user: any;
  constructor(private router: Router, private auth: AngularFireAuth, private authService: AuthService) {
    this.authService.authStateUser().subscribe(a => {
      this.user = a;
    });
  }
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

  logout(): void{
    this.auth.signOut();
    this.router.navigate(['/inicio']);
  }

}


