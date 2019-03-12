import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjectStausComponent } from './project-staus/project-staus.component';
import { ProjectStatusListComponent } from './project-staus/project-status-list.component';
import { ProjectStatusHomeComponent } from './project-staus/project-status-home.component';
import { BarChartComponent } from './Chart/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectStausComponent,
    ProjectStatusListComponent,
    ProjectStatusHomeComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: ProjectStatusHomeComponent},
      {path: 'ProjectList', component: ProjectStatusListComponent},
      {path: '', component: ProjectStausComponent},
      {path: '**', component: ProjectStausComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
