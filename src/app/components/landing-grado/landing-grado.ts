import { Component } from '@angular/core';
import { HeroInfo } from '../hero-info/hero-info';
import { FormularioInfo } from '../formulario-info/formulario-info';
import { TarjetaVentaja } from '../tarjeta-ventaja/tarjeta-ventaja';
import { Ventaja } from '../../models/ventaja';
import { SeccionIa } from '../seccion-ia/seccion-ia';

@Component({
  imports: [HeroInfo, FormularioInfo, TarjetaVentaja, SeccionIa],
  selector: 'app-landing-grado',
  styleUrl: './landing-grado.css',
  templateUrl: './landing-grado.html',
})
export class LandingGrado {
       
       ventajas: Ventaja[] = [
  { icono: 'sonrisa', titulo: 'Nuestro estudiantado nos avala', texto: 'El 77 % nos volvería a elegir.', variante: 'beige' },
  { icono: 'trofeo', titulo: 'Pioneros en e-learning', texto: 'Más de 30 años impulsando tu futuro con formación de calidad.', variante: 'gris' },
  { icono: 'ventana', titulo: '133.000 graduados por la UOC', texto: 'Con preparación orientada al futuro.', variante: 'azul' },
  { icono: 'personas', titulo: 'Reconocida por las empresas', texto: '91 % de tasa de ocupación de nuestro estudiantado.', variante: 'lila' }
];
}
