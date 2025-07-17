import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetShopdashboard } from './sweet-shopdashboard';

describe('SweetShopdashboard', () => {
  let component: SweetShopdashboard;
  let fixture: ComponentFixture<SweetShopdashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetShopdashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetShopdashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
