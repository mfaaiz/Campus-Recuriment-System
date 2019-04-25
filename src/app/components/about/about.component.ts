import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { Router } from '@angular/router';
import { timer } from 'rxjs';
//import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { 
    let timer$=timer(2000);
    timer$
    .do(val=> console.log("Routing to Home"))
    .subscribe(val=>{
      this.router.navigate(['/home']);
    })
  }

  ngOnInit() {
  }

}
