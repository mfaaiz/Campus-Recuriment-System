import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  id:string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params=> {
      this.id = params['id'];
      console.log("Contact us id(company detail): "+this.id);
    })
   }

  ngOnInit() {
  }

}
