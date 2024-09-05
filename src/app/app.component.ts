import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterComponent } from './router/router.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
