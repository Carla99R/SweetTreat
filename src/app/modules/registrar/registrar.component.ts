import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(
    private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  createUser(nombre: string, mail: string, password: string): void{
    this.auth.createUserWithEmailAndPassword(mail, password).then((user) => {
      console.log(user);
      user.user?.updateProfile({
      displayName: nombre
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
}
