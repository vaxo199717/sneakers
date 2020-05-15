import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebookComponent } from './rebook.component';

describe('RebookComponent', () => {
  let component: RebookComponent;
  let fixture: ComponentFixture<RebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
