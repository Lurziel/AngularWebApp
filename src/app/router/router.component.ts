import { Component } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-router',
  standalone: true,
  imports: [HomeComponent, CommonModule, RouterModule, DetailComponent],
  templateUrl: './router.component.html',
})
export class RouterComponent {

}
