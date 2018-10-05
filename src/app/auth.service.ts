import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) {}

  doSignup(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.signUpFormEmail, value.signUpFormPassword)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.loginFormEmail, value.loginFormPassword)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser) {
        this.afAuth.auth.signOut()
        resolve();
      }
      else {
        reject();
      }
    });
  }

}