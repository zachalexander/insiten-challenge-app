import { Component, OnInit } from '@angular/core';
import {TargetService} from '../../services/target.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  targetPosts;
  public loading = false;

  constructor(
    private targetService: TargetService
  ) { }

  // Retrieve all targets from the database
  getAllTargets() {
    this.targetService.getAllTargets().subscribe(data => {
        this.targetPosts = data.targets;
    });
  }

  ngOnInit() {
    this.loading = true;
    this.getAllTargets();
    this.loading = false;
  }

}
