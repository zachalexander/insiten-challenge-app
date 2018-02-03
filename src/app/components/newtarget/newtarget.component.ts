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
  public loading = false;
  companyName: String;
  location: String;
  keyContact1: String;
  keyContact2: String;
  financialPerformance: String;
  totalRevenue: Number;
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
    private formBuilder: FormBuilder,
    private router: Router,
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
       financialPerformance: ['', Validators.compose([
         Validators.required,
         Validators.minLength(2),
         Validators.maxLength(70)
       ])],
       totalRevenue: ['', Validators.compose([
         Validators.required,
         this.validateNumeric // Custom validation
       ])],
     })
   }

       // Function to validate e-mail is proper format
    validateNumeric(controls) {
      // Create a regular expression
      const regExp = new RegExp(/^\$?[0-9]+\.?[0-9]?[0-9]?$/);
      // Test email against regular expression
      if (regExp.test(controls.value)) {
        return null; // Return as valid email
      } else {
        return { 'validateNumeric': true } // Return as invalid email
      }
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
     const target = {
       status: this.statusUpdate,
       companyName: this.companyName,
       location: this.location,
       keyContact1: this.keyContact1,
       keyContact2: this.keyContact2,
       financialPerformance: this.financialPerformance,
       totalRevenue: this.totalRevenue
     }
     // Submit Post
     this.targetService.submitTarget(target).subscribe(data => {
       if(!data.success){
         this.messageClass = 'alert alert-danger';
         this.message = data.message;
       } else {
         this.messageClass = 'alert alert-success';
         this.loading = true;
         this.message = data.message;
         setTimeout(() => {
           this.router.navigate(['/dashboard/']);
           this.loading = false;
         }, 2000);
       }
     });
   }

  ngOnInit() {

  }

}
