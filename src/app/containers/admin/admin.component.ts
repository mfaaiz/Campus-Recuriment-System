import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../providers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
  }

}
