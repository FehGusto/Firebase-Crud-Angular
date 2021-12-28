import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  nome: string | undefined;
  title = 'firebase-angular-auth';
  isSignedIn = false
  constructor(public firebaseService : FirebaseService, private router: Router){}
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }

  //
  //função de cadastro de usuario
  //
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    this.router.navigate(['/home'])
    alert('Usuario cadastrado com Sucesso')
    };
    
    
    

}
