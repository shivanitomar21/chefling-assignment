import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormArray, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Pipe({
  name: 'filter'
})
@Component({
  selector: 'show2',
  templateUrl: './show2.component.html',
  styleUrls: ['./show2.component.css']
})
export class Show2 implements OnInit {

  signUpForm: FormGroup;
  
  constructor(private location: Location, private http: Http, private fb: FormBuilder) { 
    this.signUpForm = fb.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {

  }

  signUpUser(value: any) {

    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8', 'dataType': 'json', });
    let options = new RequestOptions({ headers: headers });
    console.log(value);
    let register = JSON.stringify(value);
    this.http.post('/api/user/signup', register, options).subscribe((result: any) => {
    },
      (error: any) => {
        console.log("Failed to register User Information. Server Error.");
      });
  }

}
