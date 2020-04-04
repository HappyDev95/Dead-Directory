import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayInGDHistComponent } from './today-in-gd-hist.component';

describe('TodayInGDHistComponent', () => {
  let component: TodayInGDHistComponent;
  let fixture: ComponentFixture<TodayInGDHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayInGDHistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayInGDHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
