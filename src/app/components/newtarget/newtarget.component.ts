import { Component, OnInit } from '@angular/core';
import {TargetService} from '../../services/target.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newtarget',
  templateUrl: './newtarget.component.html',
  styleUrls: ['./newtarget.component.scss']
})

export class NewtargetComponent implements OnInit {
  companyName: String;
  location: String;
  keyContact1: String;
  keyContact2: String;
  keyContact3: String;
  form: FormGroup;
  statusArray = ['Researching', 'Pending', 'Approved', 'Declined'];
  buttonChange = true;
  buttonChangeApproved = false;
  buttonChangePending = false;
  buttonChangeDeclined = false;
  buttonChangeResearching = false;
  moreContacts1 = false;
  clickContacts1 = true;
  moreContacts2 = false;
  clickContacts2 = false;
  lessContacts1 = false;
  lessContacts2 = false;
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
       keyContact1: ['', Validators.compose([
         Validators.required,
         Validators.minLength(2),
         Validators.maxLength(30)
       ])],
       keyContact2: ['', Validators.compose([
         Validators.minLength(2),
         Validators.maxLength(30)
       ])],
       keyContact3: ['', Validators.compose([
         Validators.minLength(2),
         Validators.maxLength(30)
       ])],
     })
   }

   statusSelect(x) {
     this.statusUpdate = x;
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

   addContact1() {
     this.moreContacts1 = true;
     this.clickContacts1 = false;
     this.lessContacts1 = true;
     this.clickContacts2 = true;
   }

   removeContact1() {
     this.moreContacts1 = false;
     this.clickContacts1 = true;
     this.lessContacts1 = false;
   }

   onTargetSubmit() {
     console.log(this.statusUpdate);

     const target = {
       status: this.statusUpdate,
       companyName: this.companyName,
       location: this.location,
       keyContact1: this.keyContact1,
       keyContact2: this.keyContact2,
       keyContact3: this.keyContact3
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

  ngOnInit() {

  }

}
