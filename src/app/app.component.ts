import { Component, OnInit } from '@angular/core';
import {TargetService} from './services/target.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  companyName: String;
  location: String;
  form: FormGroup;
  statusArray = ['Researching', 'Pending', 'Approved', 'Declined'];
  buttonChange = true;
  buttonChangeApproved = false;
  buttonChangePending = false;
  buttonChangeDeclined = false;
  buttonChangeResearching = false;
  message;
  messageClass;
  statusUpdate;

  constructor(
    private targetService: TargetService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      companyName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(45)
      ])],
      location: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])],
    })
  }

  statusSelect(x) {
    console.log(x);

    this.statusUpdate = x;

    console.log(this.statusUpdate);

    if (x == "Approved") {
      this.buttonChange = false;
      this.buttonChangePending = false;
      this.buttonChangeDeclined = false;
      this.buttonChangeResearching = false;
      this.buttonChangeApproved = true;
    }
    if (x == "Pending") {
      this.buttonChange = false;
      this.buttonChangeApproved = false;
      this.buttonChangeDeclined = false;
      this.buttonChangeResearching = false;
      this.buttonChangePending = true;
    }
    if (x == "Declined") {
      this.buttonChange = false;
      this.buttonChangeApproved = false;
      this.buttonChangePending = false;
      this.buttonChangeResearching = false;
      this.buttonChangeDeclined = true;
    }
    if (x == "Researching") {
      this.buttonChange = false;
      this.buttonChangeApproved = false;
      this.buttonChangePending = false;
      this.buttonChangeDeclined = false;
      this.buttonChangeResearching = true;
    }
  }

  onTargetSubmit() {
    console.log(this.statusUpdate);

    const target = {
      status: this.statusUpdate,
      companyName: this.companyName,
      location: this.location
    }
    // Submit Post
    this.targetService.submitTarget(target).subscribe(data => {
      if(!data.success){
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(function () {
          window.location.reload();
        }, 1500);
      }
    });
  }



}
