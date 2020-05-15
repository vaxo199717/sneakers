import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbalanceComponent } from './newbalance.component';

describe('NewbalanceComponent', () => {
  let component: NewbalanceComponent;
  let fixture: ComponentFixture<NewbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
