import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitud } from '../models/solicitud';

// Misión: enviar una solicitud de información a la API
@Injectable({ providedIn: 'root' })              // disponible en toda la app, como Datos
export class Solicitudes {
  private http = inject(HttpClient);             // cliente HTTP
  private url = 'https://jsonplaceholder.typicode.com/posts';   // API de prueba

  enviar(solicitud: Solicitud): Observable<unknown> {
    return this.http.post(this.url, solicitud);  // POST con los datos en el cuerpo
  }
}