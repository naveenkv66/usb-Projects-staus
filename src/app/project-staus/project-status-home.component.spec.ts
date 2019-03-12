import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStatusHomeComponent } from './project-status-home.component';

describe('ProjectStatusHomeComponent', () => {
  let component: ProjectStatusHomeComponent;
  let fixture: ComponentFixture<ProjectStatusHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStatusHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStatusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
