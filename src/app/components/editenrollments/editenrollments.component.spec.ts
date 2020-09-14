import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditenrollmentsComponent } from './editenrollments.component';

describe('EditenrollmentsComponent', () => {
  let component: EditenrollmentsComponent;
  let fixture: ComponentFixture<EditenrollmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditenrollmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditenrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
