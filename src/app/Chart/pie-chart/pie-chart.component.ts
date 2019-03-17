import {Component, NgModule, OnInit} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single} from '../pieChartData';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

   // options
   showLegend = true;

   colorScheme = {
     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   };

   // pie
   showLabels = true;
   explodeSlices = false;
   doughnut = false;
  constructor() {
    Object.assign(this, {single});
  }

  ngOnInit() {
  }

}
