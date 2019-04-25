import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';
import { User } from '../models';
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";

@Injectable()
export class StudentService {
    
    currentDisplayUser: User;
    constructor(public af: AngularFireDatabase,private router: Router) {}
    
    updateInfo(userId:string, userDetail: any){
        this.af.object("/users/"+userId).update(userDetail);
    }

    getUserList(accountType: string){
        if(accountType){
            query:{
                orderByChild: 'accountType'
                equalTo: accountType 
            };
            return this.af.list("/users",);
            /* return this.af.list("/users",{query: {
                        orderByChild: 'accountType',
                        equalTo: accountType 
                    }}); */
        }
        else {
            return this.af.list("/users");
            //return this.af.database.list("/users");
        }
    }

    setCurrentDisplayUser(user: User){
        this.currentDisplayUser = user;
    }

    getCurrentDisplayUser(){
        return this.currentDisplayUser;
    }

    deleteUser(user: any){
        console.log("in delete",user.$key);
        this.af.list("/users").remove(user.$key);
        //this.af.database.list("/users").remove(user.$key);
    }


   
}