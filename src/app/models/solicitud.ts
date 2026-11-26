export interface Solicitud {
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  genero: string;
  email: string;
  codigoPostal: string;
  pais: string;
  telefono1: string;      // antes era { prefijo, numero }; ahora un texto
  telefono2: string;
  gradoId: string;
}