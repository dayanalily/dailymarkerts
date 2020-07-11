import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dayana1Component } from './dayana1.component';

describe('Dayana1Component', () => {
  let component: Dayana1Component;
  let fixture: ComponentFixture<Dayana1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dayana1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dayana1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
