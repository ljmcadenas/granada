import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="container">
      <h1 class="text-center">::Leonardo Cadenas App::</h1>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .container {
      margin-top: 20px;
      padding-bottom: 20px;
      border-radius: 10px;
      max-width: 800px;
      background-color: #FED13A
    }
  `]
})
export class AppComponent {}
