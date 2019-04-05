import{ Subject} from 'rxjs/Subject';
import{ Injectable} from '@angular/core';
import {User} from "./user.model";
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();  // passing boolean payload to subject
    private user: User;  // initially user is undefined

    constructor(private router:Router) {}
    
    // defining user
    registerUser(authData:AuthData){
        this.user={
            email:authData.email,
            userId:authData.password
        };
        this.authSuccessfully();
        
    }

    login(authData:AuthData){
        this.user={
            email:authData.email,
            userId:authData.password
        };
        this.authSuccessfully();
    }

    // undefined the user
    logout(){
        this.user=null; 
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser(){
        //using spread operator to pass new object
        return{...this.user} ;
    }

    isAuth(){
        return this.user != null;
    }

    private authSuccessfully(){
        this.authChange.next(true);
        this.router.navigate(['']);
    }

}