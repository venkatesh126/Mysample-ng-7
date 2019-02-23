import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenkatComponent } from './venkat.component';

describe('VenkatComponent', () => {
  let component: VenkatComponent;
  let fixture: ComponentFixture<VenkatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenkatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenkatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
