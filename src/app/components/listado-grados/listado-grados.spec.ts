import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoGrados } from './listado-grados';

describe('ListadoGrados', () => {
  let component: ListadoGrados;
  let fixture: ComponentFixture<ListadoGrados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoGrados],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoGrados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
