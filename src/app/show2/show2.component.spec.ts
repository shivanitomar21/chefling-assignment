import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Show2 } from './show2.component';

describe('Show2', () => {
  let component: Show2;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show2 ]
    })
    .compileComponents();
  }));
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
