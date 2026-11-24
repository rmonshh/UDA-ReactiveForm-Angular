import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaVentaja } from './tarjeta-ventaja';

describe('TarjetaVentaja', () => {
  let component: TarjetaVentaja;
  let fixture: ComponentFixture<TarjetaVentaja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaVentaja],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaVentaja);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
