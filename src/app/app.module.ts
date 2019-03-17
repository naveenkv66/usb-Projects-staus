import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjectStausComponent } from './project-staus/project-staus.component';
import { ProjectStatusListComponent } from './project-staus/project-status-list.component';
import { ProjectStatusHomeComponent } from './project-staus/project-status-home.component';
import { BarChartComponent } from './Chart/bar-chart/bar-chart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './gaurds/auth.guard';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectStausComponent,
    ProjectStatusListComponent,
    ProjectStatusHomeComponent,
    BarChartComponent,
    LoginComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'dashboard', component: ProjectStatusHomeComponent, canActivate: [AuthGuard]},
      {path: 'ProjectList', component: ProjectStatusListComponent, canActivate: [AuthGuard]},
      {path: 'ProjectStatus', component: ProjectStausComponent, canActivate: [AuthGuard]},
      {path: '**', component: ProjectStausComponent, canActivate: [AuthGuard]},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
