import { Component } from '@angular/core';
import { NavigationBarComponent } from '../components/util/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-router',
  standalone: true,
  imports: [NavigationBarComponent],
  templateUrl: './router.component.html',
})
export class RouterComponent {
  routes: any = [
    {
      path: "/", name: "Accueil"
    },
    {
      path: "/exercices", name: "Exercices"
    },
  ]

}
