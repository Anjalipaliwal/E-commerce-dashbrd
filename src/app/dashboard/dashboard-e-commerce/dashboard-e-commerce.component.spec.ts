import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardECommerceComponent } from './dashboard-e-commerce.component';

describe('DashboardECommerceComponent', () => {
  let component: DashboardECommerceComponent;
  let fixture: ComponentFixture<DashboardECommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardECommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardECommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
