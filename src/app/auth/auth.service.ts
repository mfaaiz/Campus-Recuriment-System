import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();  // passing boolean payload to subject
    private isAuthenticated = false;
    //private user: User;  // initially user is undefined

    constructor(private router: Router, private afauth: AngularFireAuth) { }

    initAuthListener() {
        this.afauth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['']);
            } else{
                this.authChange.next(false);
                this.router.navigate(['/login']);
                this.isAuthenticated = false;
            }
        })
    }

    // defining user
    registerUser(authData: AuthData) {
        this.afauth.auth.createUserWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
            console.log(result);
            //this.authSuccessfully();
        })
            .catch(err => {
                console.log(err);
            })
        /* this.user={
            email:authData.email,
            userId:authData.password
        }; */


    }

    login(authData: AuthData) {
        this.afauth.auth.signInWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
            console.log(result);
           // this.authSuccessfully();
        })
            .catch(err => {
                console.log(err);
            })
        /* this.user={
            email:authData.email,
            userId:authData.password
        }; */
    }

    // undefined the user
    logout() {
        //this.user=null; 
        this.afauth.auth.signOut();
    }

    /* getUser(){
        //using spread operator to pass new object
        return{...this.user} ;
    } */

    isAuth() {
        return this.isAuthenticated;
    }

}