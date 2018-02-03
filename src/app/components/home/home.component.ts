import { Component, OnInit } from '@angular/core';
import {TargetService} from '../../services/target.service';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  targetPosts;
  public loading = false;
  private chart: AmChart;

  constructor(
    private targetService: TargetService,
    private AmCharts: AmChartsService
  ) { }

  // Retrieve all targets from the database
  getAllTargets() {
    this.targetService.getAllTargets().subscribe(data => {
        this.targetPosts = data.targets;
    });
  }

  ngAfterViewInit() {
   this.chart = this.AmCharts.makeChart("chartdiv1", {
     "type": "pie",
     "theme": "dark",
     "hideCredits": true,
     "showBalloon": false,
     "fontFamily": 'Open Sans',
     "fontSize": 15,
     "dataProvider": [{
        "title": "New",
        "value": 4852
        }, {
        "title": "Returning",
        "value": 9899
      }],
      "titleField": "title",
      "valueField": "value",
      "labelRadius": 5,
      "radius": "42%",
      "innerRadius": "60%",
      "labelText": "[[title]]"
   });

   var chart = this.AmCharts.makeChart("chartdiv2",{
     "type": "serial",
     "theme": "dark",
     "categoryField": "category",
     "fontFamily": 'Open Sans',
     "fontSize": 15,
     "hideCredits": true,
     "lineColor": "#ffffff",
     "graphs": [
       {
         "type": "column",
         "valueField": "value",
         "showBalloon": false
       }
     ],
     "dataProvider": [
       {
         "category": "category 1",
         "value": 8,
       },
       {
         "category": "category 2",
         "value": 4,
       }
     ],
     "export": {
       "enabled": false
    }
   });
 }

  ngOnInit() {
    this.loading = true;
    this.getAllTargets();
    this.loading = false;
  }

}
