import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from '../components/util/navigation-bar/navigation-bar.component';
import { DetailComponent } from '../detail/detail.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';

@Component({
  selector: 'app-router',
  standalone: true,
  imports: [HomePageComponent, CommonModule, RouterModule, DetailComponent, NavigationBarComponent],
  templateUrl: './router.component.html',
})
export class RouterComponent {
  routes:any = [
    {path: "/exercices", name: "Exercices" },
]

}
