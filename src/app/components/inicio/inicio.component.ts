import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  isSignedIn = true
  constructor(public firebaseService : FirebaseService, private router: Router,private tutorialService: TutorialService) {}
  

  //
  //Verificação se usuario está logado
  //
  ngOnInit() {
    if(this.firebaseService.isLoggedIn)
    {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
      this.router.navigate(['/home'])
    }

  }

}
  

