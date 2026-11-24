import { Component, Input } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-tarjeta-ventaja',
  styleUrl: './tarjeta-ventaja.css',
  templateUrl: './tarjeta-ventaja.html',
})
export class TarjetaVentaja {
       @Input() icono = '';
       @Input() titulo = '';
       @Input() texto = '';
       @Input() variante = 'gris';
}
