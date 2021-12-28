import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Tutorial from 'src/app/models/tutorial.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial: Tutorial = new Tutorial();
  
  submitted = false;
  isSignedIn = true
  constructor(private tutorialService: TutorialService,private router: Router, public firebaseService : FirebaseService, afAuth: AngularFireAuth) { }

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

  //
  //Criação do formulario apos usuario redirecionado ao menu
  //
  saveTutorial() {
    this.tutorialService.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
      this.router.navigate(['/inicio'])
    });
  } 
  
}
