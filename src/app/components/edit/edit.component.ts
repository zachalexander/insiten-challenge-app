import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {TargetService} from '../../services/target.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public loading = false;
  target = {
    status: String,
    companyName: String,
    location: String,
    keyContact1: String,
    keyContact2: String,
    financialPerformance: String,
    totalRevenue: Number
  }
  form: FormGroup;
  buttonChange = true;
  buttonChangeApproved = false;
  buttonChangePending = false;
  buttonChangeDeclined = false;
  buttonChangeResearching = false;
  statusArray = ['Researching', 'Pending', 'Approved', 'Declined'];
  currentUrl;
  message;
  messageClass;
  statusUpdate;
  loadEditPage = true;
  status;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private targetService: TargetService,
    private router: Router,
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
        financialPerformance: ['', Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(70)
        ])],
        totalRevenue: ['', Validators.compose([
          Validators.required,
          this.validateNumeric // Custom validation
        ])]
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

    statusSelectUpdate(x) {
      this.status = x;
      console.log(this.status);
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

    updateTargetSubmit() {
      this.target.status = this.status;
      this.targetService.editTarget(this.target).subscribe(data => {
        if (!data.success) {
          this.messageClass = 'alert alert-danger';
          this.message = data.message;
          this.loading = false;
        } else {
          this.loading = true;
          this.messageClass = 'alert alert-success';
          this.message = data.message;
          setTimeout(() => {
            this.router.navigate(['/dashboard/']);
            this.loading = false;
          }, 2000);
        }
      });
    }

    backButton() {
      this.location.back();
    }

    ngOnInit() {
      this.currentUrl = this.activatedRoute.snapshot.params;
      this.targetService.getSingleTarget(this.currentUrl.id).subscribe(data => {
        if (!data.success) {
          this.loadEditPage = false;
        } else {
          this.loadEditPage = true;
          this.target = data.targets;
          const x = this.target.status;
          this.statusSelectUpdate(x);
        }
    });
  }
}
