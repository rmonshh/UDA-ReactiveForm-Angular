import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeccionIa } from './seccion-ia';

describe('SeccionIa', () => {
  let component: SeccionIa;
  let fixture: ComponentFixture<SeccionIa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionIa],
    }).compileComponents();

    fixture = TestBed.createComponent(SeccionIa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
