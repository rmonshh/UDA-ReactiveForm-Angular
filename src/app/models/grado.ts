import { Ventaja } from './ventaja';

export interface Grado {
  id: string;
  imagen: string,       // nombre del archivo de fondo, en public   
  etiqueta: string;    // el badge: "Hasta 10% dto."
  titulo: string;
  subtitulo: string;
  puntos: string[];    // lista de textos del hero
  ventajas: Ventaja[]; // las 4 tarjetas, con la interfaz que ya tienes
}