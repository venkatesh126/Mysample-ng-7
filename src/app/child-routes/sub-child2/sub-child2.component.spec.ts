import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChild2Component } from './sub-child2.component';

describe('SubChild2Component', () => {
  let component: SubChild2Component;
  let fixture: ComponentFixture<SubChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
