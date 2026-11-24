import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingGrado } from './landing-grado';

describe('LandingGrado', () => {
  let component: LandingGrado;
  let fixture: ComponentFixture<LandingGrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingGrado],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingGrado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
