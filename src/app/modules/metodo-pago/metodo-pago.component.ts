import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AuthService } from 'src/app/service/auth.service';
import 'firebase/firestore';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.css']
})
export class MetodoPagoComponent implements OnInit {
  user: any;
  usuario: any;
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

}
