import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class ChartdataProvider {

  constructor() {
    
  }

  signUp(email:string, password:string){
    let promise = new Promise((resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
        resolve(user.user.uid);
      }).catch((err)=>{
        reject(err);
      })
    })
    return promise;
  }

  signIn(email:string, password:string){
    let promise = new Promise((resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
        resolve(user.user.uid);
      }).catch((err)=>{
        reject(err);
      })
    })
    return promise;
  }

  register(name:string, username:string,uid:any){
    let promise = new Promise((resolve, reject)=>{
      firebase.database().ref("/users/"+uid).set(
        {
          name:name,
          username:username,
        }
      ).then(()=>{
        resolve("Utilisateur ajouté");
      }).catch((err)=>{
        reject(err);
      })
    })
    return promise;
  }
  
}
