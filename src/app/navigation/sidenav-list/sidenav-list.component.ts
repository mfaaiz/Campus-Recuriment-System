import { Component, OnInit,EventEmitter,Output, OnDestroy } from '@angular/core';
import{Subscription} from 'rxjs/Subscription';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit,OnDestroy {
  @Output() closeSidenav=new EventEmitter<void>();
  isAuth :boolean=false;
  authSubsription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubsription=this.authService.authChange.subscribe(authStatus=>{
      this.isAuth=authStatus;
    })
  }

  onLogout(){
    this.closeSidenav.emit();
    this.authService.logout();
  } 

  ngOnDestroy(){
    this.authSubsription.unsubscribe();
  }

}
