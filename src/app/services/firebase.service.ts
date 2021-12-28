import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'

  //
  //Service responsavel pelos metodos do Usuario
  //

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  static getInstance() {
    throw new Error('Method not implemented.');
  }

  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth) { }
  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      return
    })
  }
  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      
    })
  }
  
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }

}


