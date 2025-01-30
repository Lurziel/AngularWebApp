import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, Routes } from "@angular/router";
import { ExercicesPageComponent } from "../pages/exercices-page/exercices-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { TechnologiesPageComponent } from "../pages/technologies-page/technologies-page.component";
import { LoginService } from "../services/login.service";
import { GamesPageComponent } from "../pages/games-page/games-page.component";

@Injectable({
  providedIn: 'root',
})
class PermissionsService {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    const loginService = inject(LoginService);

    if(loginService.isTokenExpired()) {
      this.router.navigate(['/connection', {target:state.url}], {})
      return false
    }
    return true
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivate(next, state);
}

const routeConfig: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'exercices',
    component: ExercicesPageComponent,
  },
  {
    path: 'games',
    component: GamesPageComponent,
  },
  {
    path: 'technologies',
    component: TechnologiesPageComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'connection',
    component: LoginPageComponent,
  }
];


export default routeConfig;