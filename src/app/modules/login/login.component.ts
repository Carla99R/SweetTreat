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
  admin: any;
  constructor(private auth: AngularFireAuth, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(email: string, password: string): void{
    this.auth.signInWithEmailAndPassword(email, password).then(async () => {
      console.log('logged in');
      this.authService.authStateUser().subscribe(a => {
        this.user = a;
        console.log(this.user.uid);
      });
      const adminCollection = firebase.firestore().collection('carritos').where('usuario', '==', this.user.uid).get();
      this.admin = (await adminCollection).docs.map(doc => ({id: doc.id, ...doc.data()}));

      if (this.admin.admin) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/home']);
      }
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
