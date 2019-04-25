import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from './providers';

interface user {
  name: string;
  email: string;
  password: string;
  designation?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Campus_Recruitment_Sysytem';
  openSidenav = false;

  userCollection: AngularFirestoreCollection<user>;
  users: Observable<user[]>;
  snapshot: any;

  constructor(private data: AngularFirestore, authService: AuthService) {

  }

  ngOnInit() {
    this.userCollection = this.data.collection('users', ref => {
      return ref.orderBy('name')
    }); //reference
    this.users = this.userCollection.valueChanges(); // observable of users data
  }
}
