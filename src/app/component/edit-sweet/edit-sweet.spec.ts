import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSweet } from './edit-sweet';

describe('EditSweet', () => {
  let component: EditSweet;
  let fixture: ComponentFixture<EditSweet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSweet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSweet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
