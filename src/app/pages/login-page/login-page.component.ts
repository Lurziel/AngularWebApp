import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PageTitleComponent } from '../../components/util/page-title/page-title.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  title: string = "Connexion"

  login: string = "user@user.com"
  password: string = "password"

  errorMessage: string = ""
  isLoading: boolean = false

  loginService: LoginService = inject(LoginService);

  constructor(private router: Router, private route: ActivatedRoute) { }

  loginChange(event: any) {
    this.login = event.target.value
  }

  passChange(event: any) {
    this.password = event.target.value
  }

  connection() {
    this.isLoading = true
    this.loginService.simpleLogin(this.login, this.password)
      .then(result => {
        if (result === 200) {
          let redirect = this.route.snapshot.paramMap.get("target")
          if (redirect === null) redirect = '/'
          this.router.navigate([redirect])
        } 
        else if (result === undefined) {
          this.errorMessage = "Base de données indisponible"
        } 
        else {
          this.errorMessage = "Mauvais login ou mot de passe."
        }
      })
      .catch(e => {
        this.errorMessage = e
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
