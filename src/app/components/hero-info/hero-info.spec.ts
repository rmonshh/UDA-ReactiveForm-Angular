import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroInfo } from './hero-info';

describe('HeroInfo', () => {
  let component: HeroInfo;
  let fixture: ComponentFixture<HeroInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
