import { Routes } from '@angular/router';
import { ListadoGrados } from './components/listado-grados/listado-grados';
import { LandingGrado } from './components/landing-grado/landing-grado';

export const routes: Routes = [
       { path: '', redirectTo: 'grados', pathMatch: 'full' },   // la raíz lleva al listado
       { path: 'grados', component: ListadoGrados },            // /grados
       { path: 'grados/:id', component: LandingGrado },         // /grados/multimedia, /grados/informatica...
       { path: '**', redirectTo: 'grados' }, 
];
