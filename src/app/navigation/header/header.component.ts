import { Component, OnInit,EventEmitter,Output, OnDestroy } from '@angular/core';
import{Subscription} from 'rxjs/Subscription';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Output() sidenavToggle=new EventEmitter<void>();
  isAuth :boolean=false;
  authSubsription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubsription=this.authService.authChange.subscribe(authStatus=>{
      this.isAuth=authStatus;
    })
  }

  onLogout(){
    this.authService.logout();
  } 
  
  ngOnDestroy(){
    this.authSubsription.unsubscribe();
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

}
