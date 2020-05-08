import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApimapComponent } from './apimap.component';

describe('ApimapComponent', () => {
  let component: ApimapComponent;
  let fixture: ComponentFixture<ApimapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApimapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApimapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
