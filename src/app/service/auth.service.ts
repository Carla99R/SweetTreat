import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User | null>;
  userId: any;
  us: any;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
  ) {
    this.user = afAuth.authState;
    this.user.subscribe(u => {
      if (u) {
        this.us = u;
        this.userId = u.uid;
      }
    });
  }

  async loginG(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(provider);
  }

  authStateUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;

  }

  signOut(): void {
    this.afAuth.signOut().then(s => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
}





