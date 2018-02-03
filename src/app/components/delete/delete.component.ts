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
  currentUrl;
  message;
  messageClass;
  statusUpdate;
  loadEditPage = true;
  status;
  targetSpecific;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private targetService: TargetService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  deleteTargetFinal() {
    this.target.status = this.status;
    this.targetService.deleteTarget(this.currentUrl.id).subscribe(data => {
      if (!data.success) {
        console.log('this did not work');
      } else {
        this.loading = true;
        setTimeout(() => {
          this.router.navigate(['/dashboard/']);
          this.loading = false;
        }, 3000);
      }
    });
  }

  // Retrieve specific target from the database
  getSpecificTarget() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.targetService.getSingleTarget(this.currentUrl.id).subscribe(data => {
        this.targetSpecific = data.targets;
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
        this.targetSpecific = {
          companyName: data.targets.companyName,
          status: data.targets.status,
          location: data.targets.location,
          keyContact1: data.targets.keyContact1,
          keyContact2: data.targets.keyContact2,
          financialPerformance: data.targets.financialPerformance
      }
    }
  });
}

}
