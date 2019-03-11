import { Component, OnInit } from '@angular/core';
import { ProjectStatus } from '../project-staus/ProjectStatus';
@Component({
  selector: 'app-project-staus',
  templateUrl: './project-staus.component.html',
  styleUrls: ['./project-staus.component.css']
})
export class ProjectStausComponent implements OnInit {

  constructor() { }
  projectStaus: ProjectStatus = {
    projectName: null,
    currentResourceCount: null,
    currentStage: null,
    delivaryEscalation: null,
    projectEndDate: null,
    projectId: null,
    staus: null,
  };
  ngOnInit() {
  }

  onSubmit() {
    console.log('reached');
    let projectStausList: ProjectStatus[] = [];
    let exitingprojectStausList = JSON.parse(localStorage.getItem('projectStatus'));
    if (exitingprojectStausList != null) {
      console.log('reached2');
      exitingprojectStausList.push(this.projectStaus);
      localStorage.setItem('projectStatus', JSON.stringify(exitingprojectStausList));
    } else {
      console.log('reached3');
      projectStausList.push(this.projectStaus);
      localStorage.setItem('projectStatus', JSON.stringify(projectStausList));
    }
  }
}
