import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Observable} from 'rxjs';
import { IAppState,AuthActions } from '../../store';
import { NgRedux, select } from 'ng2-redux';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  @select(['auth','user']) user$ :Observable<any>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
