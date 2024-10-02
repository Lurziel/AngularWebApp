import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, SvgComponent],
  templateUrl: './navigation-bar.component.html',
})

export class NavigationBarComponent {

  @Input() navigationData: any[] = []

  linkClass = "flex p-2 mx-1 items-center md:text-md text-sm gap-x-2 text-light rounded-xl hover:text-dark hover:bg-light hover:ring hover:ring-light active:opacity-85"

  loginService: LoginService = inject(LoginService)
  constructor(private router : Router) {  }

  disconnect() {
    this.loginService.clear();
    this.router.navigate(['/']);
  }
}
