import{ Subject} from 'rxjs/Subject';

import {User} from "./user.model";
import { AuthData } from './auth-data.model';

export class AuthService{
    authChange = new Subject<boolean>();  // passing boolean payload to subject
    private user: User;  // initially user is undefined
    
    // defining user
    registerUser(authData:AuthData){
        this.user={
            email:authData.email,
            userId:authData.password
        };
        this.authChange.next(true);
    }

    login(authData:AuthData){
        this.user={
            email:authData.email,
            userId:authData.password
        };
        this.authChange.next(true);
    }

    // undefined the user
    logout(){
        this.user=null; 
        this.authChange.next(false);
    }

    getUser(){
        //using spread operator to pass new object
        return{...this.user} ;
    }

    isAuth(){
        return this.user != null;
    }

}