import { Component, signal } from '@angular/core';
import { LandingGrado } from './components/landing-grado/landing-grado';
import { Header } from './components/header/header';

@Component({
  imports: [LandingGrado, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('reactive-form');
}
