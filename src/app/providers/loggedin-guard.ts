import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from '@angular/fire/auth'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { range } from 'rxjs';


@Injectable()
export class LoggedInGuard implements CanActivate {
     source$ = range(0,5);

    constructor(public af: AngularFireAuth, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         console.log('AuthGuard: canActivate');
         
         return this.af.user.pipe(
             
        take(1)
         ,map(authState => {
             if (authState) {
                 console.log('authGuard: authenticated',authState);
                 return true;
             } else {
                 console.log('authGuard: not authenticated');
                 this.router.navigate(['/signin']);
                 return false;
             }
         }))
       // return of(true);
    }
}
