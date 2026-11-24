import { Component } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario-info',
  styleUrl: './formulario-info.css',
  templateUrl: './formulario-info.html',
})
export class FormularioInfo {

       submitted = false;

       formulario = new FormGroup({
              
              nombre: new FormControl('', [Validators.required]),

              primerApellido: new FormControl('', [Validators.required]),

              segundoApellido: new FormControl(''),

              genero: new FormControl(''),

              email: new FormControl('', [
                     Validators.required,
                     Validators.email
              ]),

              codigoPostal: new FormControl('',[
                     Validators.pattern(/^[0-9]{5}$/)
                     ]),

              pais: new FormControl('espana'),

              telefono1: new FormControl('', [
                     Validators.pattern(/^[0-9]{9}$/)
                     ]), 

              telefono2: new FormControl(''),

              privacidad: new FormControl(false, Validators.requiredTrue)


       });

       enviarFormulario() {

              this.submitted = true;

              if(this.formulario.valid) {
                     console.log('Datos del formulario:');

                     const datos = this.formulario.value;

                     // COnvertir objeto a JSON
                     const json = JSON.stringify(datos);
                     console.log(json);
              
              
              } else {
                     console.log('Formulario incorrecto');
                     this.formulario.markAllAsTouched();
              }
       }

              
}
