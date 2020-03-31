import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourYearComponent } from './tour-year.component';

describe('TourYearComponent', () => {
  let component: TourYearComponent;
  let fixture: ComponentFixture<TourYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
