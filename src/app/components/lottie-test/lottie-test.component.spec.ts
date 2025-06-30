import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieTestComponent } from './lottie-test.component';

describe('LottieTestComponent', () => {
  let component: LottieTestComponent;
  let fixture: ComponentFixture<LottieTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottieTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottieTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
