import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {TargetService} from '../../services/target.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  public loading = false;
  target = {
    status: String,
    companyName: String,
    location: String,
    keyContact1: String,
    keyContact2: String,
    financialPerformance: String
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
    })
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

  deleteTargetFinal() {
    this.target.status = this.status;
    this.targetService.deleteTarget(this.currentUrl.id).subscribe(data => {
      if (!data.success) {
        console.log('this did not work');
      } else {
        this.loading = true;
        setTimeout(() => {
          this.router.navigate(['/home/']);
          this.loading = false;
        }, 3000);
      }
    });
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.targetService.getSingleTarget(this.currentUrl.id).subscribe(data => {
      if (!data.success) {
        console.log('this did not work');
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
