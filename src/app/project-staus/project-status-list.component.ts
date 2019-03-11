import { Component, OnInit } from '@angular/core';
import { ProjectStatus } from './ProjectStatus';

@Component({
  selector: 'app-project-status-list',
  templateUrl: './project-status-list.component.html',
  styleUrls: ['./project-status-list.component.css']
})
export class ProjectStatusListComponent implements OnInit {
  pageTitle = '';
  projectStatusList: ProjectStatus[] = [];
  constructor() { }

  ngOnInit() {
    this.pageTitle =  'ProjectStaus List';
    this.projectStatusList = JSON.parse(localStorage.getItem('projectStatus'));
    console.log(this.projectStatusList);
  }

}
