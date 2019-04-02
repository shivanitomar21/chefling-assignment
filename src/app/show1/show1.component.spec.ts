import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Show1 } from './show1.component';

describe('AddSubscriber', () => {
  let component: Show1;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show1 ]
    })
    .compileComponents();
  }));
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
