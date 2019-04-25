import { Injectable } from '@angular/core';
import { Job } from '../models';
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class CompanyService {
    
    currentJob : Job
    constructor(public af: AngularFireAuth) {
        //this.users = this.af.database.object("/users")
    }
    postJob(userId: string, value:any){
        value.companyId = userId;
        this.af.user.list("/jobs").push(value)
       // this.af.list("/jobs").push(value)
        .then(val=>{
            console.log("after post ",val);
            //this.router.navigate(['./../list-jobs']);
            
        });
    }

    getJobList(companyId: any){
        if(companyId){
            return this.af.user.list('/jobs',{
                query:{
                    orderByChild: 'companyId',
                    equalTo : companyId,
                }
            });
        } //if
        else{
            return this.af.user.list("/jobs");
        }
    }

    setCurrentJob(job: Job){
        this.currentJob = job;
    }

    getCurrentJob(){
        return this.currentJob;
    }

    deleteJob(job: any){
        console.log(job);
        console.log(job.$key);
        this.af.user.list("/jobs").remove(job.$key);
    }

}