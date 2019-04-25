import { AuthService} from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authservice:AuthService){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        /* if(this.authService.isAuth()){
            return true;
        } else{
            this.router.navigate(['/login']);
        } */
        return true;            
    }
}

