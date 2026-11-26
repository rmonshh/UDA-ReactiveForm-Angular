import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero-info',
  styleUrl: './hero-info.css',
  templateUrl: './hero-info.html',
})
export class HeroInfo {
       @Input() etiqueta = '';             // texto del badge ("Hasta 10% dto.")
       @Input() titulo = '';               // título grande
       @Input() subtitulo = '';            // frase bajo el título
       @Input() puntos: string[] = [];     // lista de ventajas del grado
}
