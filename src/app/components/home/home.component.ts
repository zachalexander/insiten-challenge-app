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
  pieArray = [];
  maxRevenueArray: this.maxRevenueArray[0];
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
        const pieData = data.targets;
        const pieArray = [];
        const pieNumber = [];
        const maxRevenue = [];

        pieData.forEach(function (value) {
          pieArray.push(
            {
              "companyName": value.companyName,
              "totalRevenue": value.totalRevenue
            }
          )
          pieNumber.push(value.totalRevenue);
        });

        const maxValue = Math.max.apply(null, pieNumber)
          pieArray.forEach(function (value) {
            if (value.totalRevenue === maxValue) {
              maxRevenue.push({
                "companyName": value.companyName,
                "totalRevenue": value.totalRevenue
              });
            }
          });
        this.maxRevenueArray = maxRevenue[0];

        this.chart = this.AmCharts.makeChart("chartdiv1", {
          "type": "pie",
          "theme": "dark",
          "hideCredits": true,
          "showBalloon": false,
          "fontFamily": 'Open Sans',
          "fontSize": 15,
          "dataProvider": pieArray,
           "titleField": "companyName",
           "valueField": "totalRevenue",
           "labelRadius": 8,
           "radius": "30%",
           "innerRadius": "50%",
           "labelText": "[[title]]"
        });
      });
  }

  ngOnInit() {
    this.loading = true;
    this.getAllTargets();
    this.loading = false;
  }

}
