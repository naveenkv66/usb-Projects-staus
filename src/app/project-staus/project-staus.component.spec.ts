import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStausComponent } from './project-staus.component';

describe('ProjectStausComponent', () => {
  let component: ProjectStausComponent;
  let fixture: ComponentFixture<ProjectStausComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStausComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
