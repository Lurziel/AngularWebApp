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

  linkClass = "flex px-2.5 pt-3 pb-3.5 mx-1 items-center md:text-md text-sm gap-x-2 text-light rounded-t-md hover:text-dark hover:bg-white"

  loginService: LoginService = inject(LoginService)
  constructor(private router : Router) {  }

  disconnect() {
    this.loginService.clear();
    this.router.navigate(['/']);
  }
}
