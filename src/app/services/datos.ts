import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grado } from '../models/grado';

@Injectable({
       providedIn: 'root', // Para que el servicio esté disponible en toda la app
})
export class Datos {
       private http = inject(HttpClient);
       private url = 'data/grados.json';

       obtenerGrados(): Observable<Grado[]> {
              return this.http.get<Grado[]>(this.url);
       }

}

// Ya podemos inyectar el servicio en cualquier componente
/*

import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Datos } from './datos';

@Component({
  selector: 'app-mi-componente',
  standalone: true,
  templateUrl: './mi-componente.component.html'
})
export class MiComponente {
  private datosService = inject(Datos);

  datos = toSignal(this.datosService.obtenerDatos(), { initialValue: [] });

  => Ahora podemos usar 'datos' en la plantilla del componente
}

*/
