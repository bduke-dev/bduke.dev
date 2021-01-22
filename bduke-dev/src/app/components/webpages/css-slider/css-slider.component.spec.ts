import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSliderComponent } from './css-slider.component';

describe('CssSliderComponent', () => {
  let component: CssSliderComponent;
  let fixture: ComponentFixture<CssSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
