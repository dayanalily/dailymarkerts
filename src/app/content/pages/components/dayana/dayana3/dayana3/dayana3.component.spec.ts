import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dayana3Component } from './dayana3.component';

describe('Dayana3Component', () => {
  let component: Dayana3Component;
  let fixture: ComponentFixture<Dayana3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dayana3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dayana3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
