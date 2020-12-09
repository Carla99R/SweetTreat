import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AuthService } from 'src/app/service/auth.service';
import 'firebase/firestore';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: any;
  usuario: any;
  condition: boolean = false;
  
  constructor( private authService: AuthService,  private auth: AngularFireAuth) {
    this.authService.authStateUser().subscribe(a => {
      this.user = a;
      console.log(this.user.uid);
    });
  }


  async ngOnInit(): Promise<void> {

    const usuarioRef = await firebase.firestore().collection('usuarios').doc(this.user.uid).get();
    if (usuarioRef.exists) {
      this.usuario = usuarioRef.data();
    }
    else {
      const usuarioRef = await firebase.firestore().collection('usuarios').doc("plantilla").get();
      this.usuario = usuarioRef.data();
    }
   
  }

  async updateUser(nombre: string, direccion: string){
    const db = await firebase.firestore().collection('usuarios').doc(this.user.uid);
    console.log(direccion);
    db.set({direccion: direccion}, {merge: true}).then(()=>console.log("listo"));
    console.log(direccion);
    this.user.updateProfile({
      displayName: nombre

    })
    const usuarioRef = await firebase.firestore().collection('usuarios').doc(this.user.uid).get();
    this.usuario = usuarioRef.data();
  }

}
