import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSweet } from './add-sweet';

describe('AddSweet', () => {
  let component: AddSweet;
  let fixture: ComponentFixture<AddSweet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSweet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSweet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
