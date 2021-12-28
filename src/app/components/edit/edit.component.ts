import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Tutorial from 'src/app/models/tutorial.model';
import { User } from 'src/app/models/user.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  tutorial: Tutorial = new Tutorial();
  submitted = false;
  isSignedIn = true
  constructor(public firebaseService : FirebaseService, private router: Router) { }

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
