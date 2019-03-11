import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjectStausComponent } from './project-staus/project-staus.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectStausComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'welcome', component: ProjectStausComponent},
      {path: '', component: ProjectStausComponent},
      {path: '**', component: ProjectStausComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
