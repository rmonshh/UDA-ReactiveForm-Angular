import { Component, OnInit, inject, signal } from '@angular/core';
import { HeroInfo } from '../hero-info/hero-info';
import { FormularioInfo } from '../formulario-info/formulario-info';
import { TarjetaVentaja } from '../tarjeta-ventaja/tarjeta-ventaja';
import { SeccionIa } from '../seccion-ia/seccion-ia';
import { Datos } from '../../services/datos';
import { Grado } from '../../models/grado';
import {ActivatedRoute} from '@angular/router';

@Component({
  imports: [HeroInfo, FormularioInfo, TarjetaVentaja, SeccionIa],
  selector: 'app-landing-grado',
  styleUrl: './landing-grado.css',
  templateUrl: './landing-grado.html',
})
export class LandingGrado implements OnInit {
  private datos = inject(Datos);                      // servicio que lee el JSON
  grado = signal<Grado | undefined>(undefined);       // aquí se guarda el grado; vacío al principio
  private ruta = inject(ActivatedRoute);

  ngOnInit() {
  const id = this.ruta.snapshot.paramMap.get('id');        // lee "informatica" de /grados/informatica
  this.datos.obtenerGrados().subscribe(grados => {
    this.grado.set(grados.find(g => g.id === id));         // antes: grados[0]
  });
}
}
