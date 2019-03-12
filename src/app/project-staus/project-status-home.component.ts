import { Component, OnInit } from '@angular/core';
import { BarChartData } from '../Chart/barChartData';

@Component({
  selector: 'app-project-status-home',
  templateUrl: './project-status-home.component.html',
  styleUrls: ['./project-status-home.component.css']
})
export class ProjectStatusHomeComponent implements OnInit {

  constructor() { }
  data: BarChartData[] = null;
  ngOnInit() {
    this.data = [
      { projectName: 'Zelle', resourceCount: 7 },
      { projectName: 'Internal Payments', resourceCount: 9 },
      { projectName: 'Internal Transfer', resourceCount: 10 },
      { projectName: 'Transmit', resourceCount: 3 },
      { projectName: 'Shared Auth', resourceCount: 6 }
    ];
  }

}
