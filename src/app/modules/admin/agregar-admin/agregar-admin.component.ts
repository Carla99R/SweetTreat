import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-agregar-admin',
  templateUrl: './agregar-admin.component.html',
  styleUrls: ['./agregar-admin.component.css']
})
export class AgregarAdminComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

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
