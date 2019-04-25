import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../providers';
import {Job} from '../../models';
import { Observable} from 'rxjs';
import { select } from 'ng2-redux';
import { AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  jobs: AngularFireList<any>;
  @select(['auth','user']) user$ :Observable<any>;

  constructor(private companyService: CompanyService) { 
      this.user$.subscribe(user=> {
      
        if(user && user.accountType=="2"){
          this.jobs = this.companyService.getJobList(user.uid);
        }
        else {
          this.jobs = this.companyService.getJobList(null);
        }     
      })
  }

  viewDetail(job: Job){
    this.companyService.setCurrentJob(job);
    console.log("Job = ",job);
  }

  deleteJob(job:any){
    console.log(job);
    this.companyService.deleteJob(job);
  }

  ngOnInit() {
  }

}
