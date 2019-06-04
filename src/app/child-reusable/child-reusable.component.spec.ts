import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildReusableComponent } from './child-reusable.component';

describe('ChildReusableComponent', () => {
  let component: ChildReusableComponent;
  let fixture: ComponentFixture<ChildReusableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildReusableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
