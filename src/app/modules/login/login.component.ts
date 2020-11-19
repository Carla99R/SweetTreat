import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login(email: string, password: string){
    this.auth.signInWithEmailAndPassword(email, password).then(function() {
      console.log('logged in');
    })
    .catch(function(error) {
      console.log(error);
    });;
  }
}
