import { Component, OnInit } from '@angular/core';
import {TargetService} from '../../services/target.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  targetPosts;

  constructor(
    private targetService: TargetService
  ) { }

  getAllTargets() {
    this.targetService.getAllTargets().subscribe(data => {
      this.targetPosts = data.targets;
      console.log(this.targetPosts);
    });
  }

  ngOnInit() {
    this.getAllTargets();
  }

}
