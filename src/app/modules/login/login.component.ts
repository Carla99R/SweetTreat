import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private auth: AngularFireAuth, private authService: AuthService, private router: Router) {
    this.authService.authStateUser().subscribe(a => {
      this.user = a;
    });
  }

  ngOnInit(): void {
  }

  login(email: string, password: string): void{
    this.auth.signInWithEmailAndPassword(email, password).then(function() {
      console.log('logged in');
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  loginG(): void {
    this.authService.loginG();
    this.authService.user.subscribe(a => {
      console.log(a);
      this.user = a;
    });
  }
  private checkUserIsVerified(user: User): void {
    if (user && user.emailVerified) {
      this.router.navigate(['/home']);
    } else if (user) {
      this.router.navigate(['/verification-email']);
    } else {
      this.router.navigate(['/register']);
    }
  }
}
