import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';      // para los enlaces del HTML
import { Datos } from '../../services/datos';
import { Grado } from '../../models/grado';

// Misión: pedir todos los grados y mostrarlos como enlaces
@Component({
  selector: 'app-listado-grados',
  imports: [RouterLink],
  templateUrl: './listado-grados.html',
  styleUrl: './listado-grados.css'
})
export class ListadoGrados implements OnInit {
  private datos = inject(Datos);                    // el servicio que ya tienes
  grados = signal<Grado[]>([]);                     // lista vacía hasta que llegue el JSON

  ngOnInit() {
    this.datos.obtenerGrados().subscribe(grados => {
      this.grados.set(grados);                      // guarda todos los grados
    });
  }
}