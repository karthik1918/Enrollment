import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenrollmentsComponent } from './listenrollments.component';

describe('ListenrollmentsComponent', () => {
  let component: ListenrollmentsComponent;
  let fixture: ComponentFixture<ListenrollmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenrollmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
