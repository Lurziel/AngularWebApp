import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../components/util/page-title/page-title.component';
import { LoginService } from '../../services/login.service';
import {Router} from "@angular/router"

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

  errorMessage:string = ""

  loginService: LoginService = inject(LoginService);

  constructor(private router: Router) { }

  loginChange(event: any){
    this.login = event.target.value
  }

  passChange(event : any){
    this.password = event.target.value
  }

  connection() {
    this.loginService.simpleLogin(this.login, this.password)
      .then(result => {
        result === 200 ? this.router.navigate(['/']) : this.errorMessage = "Mauvais login ou mot de passe."
      })
      .catch(e =>{
        this.errorMessage = e
      })
  }
}
