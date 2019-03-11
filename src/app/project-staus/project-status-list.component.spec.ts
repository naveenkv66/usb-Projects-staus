import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStatusListComponent } from './project-status-list.component';

describe('ProjectStatusListComponent', () => {
  let component: ProjectStatusListComponent;
  let fixture: ComponentFixture<ProjectStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
