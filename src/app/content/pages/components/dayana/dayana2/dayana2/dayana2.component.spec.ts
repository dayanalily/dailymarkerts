import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dayana2Component } from './dayana2.component';

describe('Dayana2Component', () => {
  let component: Dayana2Component;
  let fixture: ComponentFixture<Dayana2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dayana2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dayana2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
