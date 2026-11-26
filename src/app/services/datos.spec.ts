import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Datos } from './datos';
import { Grado } from '../models/grado';

describe('Datos', () => {
  let service: Datos;
  let http: HttpTestingController;     // simula el servidor: no sale ninguna petición real

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(Datos);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();                     // falla si queda alguna petición sin atender
  });

  it('se crea', () => {
    expect(service).toBeTruthy();
  });

  it('pide los grados al JSON con un GET y devuelve lo recibido', () => {
    const gradosFalsos = [
      { id: 'multimedia', titulo: 'Grado en Multimedia' },
      { id: 'informatica', titulo: 'Grado en Ingeniería Informática' },
    ] as Grado[];

    let resultado: Grado[] | undefined;
    service.obtenerGrados().subscribe(grados => (resultado = grados));   // lanza la petición

    const peticion = http.expectOne('data/grados.json');   // comprueba la URL
    expect(peticion.request.method).toBe('GET');            // comprueba el método

    peticion.flush(gradosFalsos);                           // responde con los datos falsos

    expect(resultado).toEqual(gradosFalsos);                // el servicio los devuelve tal cual
  });
});