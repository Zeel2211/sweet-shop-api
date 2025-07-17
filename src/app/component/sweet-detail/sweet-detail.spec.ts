import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetDetail } from './sweet-detail';

describe('SweetDetail', () => {
  let component: SweetDetail;
  let fixture: ComponentFixture<SweetDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
