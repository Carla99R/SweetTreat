import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  constructor(private router: Router, private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  recuperar(mail: string){
    console.log(mail)
      this.auth.sendPasswordResetEmail(
      mail)
      .then(function() {
        console.log('Password reset email sent');
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
