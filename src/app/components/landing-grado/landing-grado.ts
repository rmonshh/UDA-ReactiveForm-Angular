import { Component } from '@angular/core';
import { HeroInfo } from '../hero-info/hero-info';
import { FormularioInfo } from '../formulario-info/formulario-info';
import { TarjetaVentaja } from '../tarjeta-ventaja/tarjeta-ventaja';

@Component({
  imports: [HeroInfo, FormularioInfo, TarjetaVentaja],
  selector: 'app-landing-grado',
  styleUrl: './landing-grado.css',
  templateUrl: './landing-grado.html',
})
export class LandingGrado {
       
}
