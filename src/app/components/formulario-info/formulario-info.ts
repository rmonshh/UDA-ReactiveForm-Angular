import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Solicitudes } from '../../services/solicitudes';
import { Solicitud } from '../../models/solicitud';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario-info',
  styleUrl: './formulario-info.css',
  templateUrl: './formulario-info.html',
})
export class FormularioInfo {

  private solicitudes = inject(Solicitudes);    // servicio que hace el POST
  private ruta = inject(ActivatedRoute);        // para saber en qué grado estamos

  submitted = false;

  formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    primerApellido: new FormControl('', [Validators.required]),
    segundoApellido: new FormControl(''),
    genero: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    codigoPostal: new FormControl('', [Validators.pattern(/^[0-9]{5}$/)]),
    pais: new FormControl('espana'),
    telefono1: new FormControl('', [Validators.pattern(/^[0-9]{9}$/)]),
    telefono2: new FormControl(''),
    privacidad: new FormControl(false, Validators.requiredTrue)
  });

  enviarFormulario() {
    this.submitted = true;

    if (this.formulario.invalid) {
      console.log('Formulario incorrecto');
      this.formulario.markAllAsTouched();
      return;                                    // si no es válido, no se envía nada
    }

    const v = this.formulario.value;             // los valores pueden ser null: usamos ?? ''
    const solicitud: Solicitud = {
      nombre: v.nombre ?? '',
      primerApellido: v.primerApellido ?? '',
      segundoApellido: v.segundoApellido ?? '',
      genero: v.genero ?? '',
      email: v.email ?? '',
      codigoPostal: v.codigoPostal ?? '',
      pais: v.pais ?? '',
      telefono1: v.telefono1 ?? '',
      telefono2: v.telefono2 ?? '',
      gradoId: this.ruta.snapshot.paramMap.get('id') ?? ''   // "informatica", "multimedia"...
    };

    this.solicitudes.enviar(solicitud).subscribe({   // sin subscribe no se envía nada
      next: respuesta => console.log('Enviado:', respuesta),
      error: err => console.error('Error al enviar:', err),
    });
  }
}