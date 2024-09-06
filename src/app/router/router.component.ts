import { Component } from '@angular/core';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-router',
  standalone: true,
  imports: [HomePageComponent, CommonModule, RouterModule, DetailComponent],
  templateUrl: './router.component.html',
})
export class RouterComponent {}
