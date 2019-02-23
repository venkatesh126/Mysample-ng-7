import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidataionsComponent } from './form-validataions.component';

describe('FormValidataionsComponent', () => {
  let component: FormValidataionsComponent;
  let fixture: ComponentFixture<FormValidataionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidataionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidataionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
