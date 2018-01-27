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
  message;
  messageClass;

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
        Validators.minLength(5),
        Validators.maxLength(45)
      ])],
      location: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])],
    })
  }

  onTargetSubmit() {
    const target = {
      companyName: this.companyName,
      location: this.location
    }
    console.log(target);
    // Submit Post
    this.targetService.submitTarget(target).subscribe(data => {
      if(!data.success){
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
      }
    });
  }
}
