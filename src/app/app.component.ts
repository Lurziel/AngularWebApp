import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterComponent } from './router/router.component';
import { FooterComponent } from './components/util/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
