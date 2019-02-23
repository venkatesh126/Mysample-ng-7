import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChild1Component } from './sub-child1.component';

describe('SubChild1Component', () => {
  let component: SubChild1Component;
  let fixture: ComponentFixture<SubChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
