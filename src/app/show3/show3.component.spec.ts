import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Show3 } from './show3.component';

describe('Show3', () => {
  let component: Show3;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show3 ]
    })
    .compileComponents();
  }));
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
