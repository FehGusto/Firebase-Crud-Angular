import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'firebase-angular-auth';
  isSignedIn = false
  constructor(public firebaseService : FirebaseService, private router: Router){}
  ngOnInit(){
  
  }

  //
  //Login do usuario
  //
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    this.router.navigate(['/inicio'])
  }
  
}
  


 



