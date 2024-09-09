import { Routes } from "@angular/router";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { ExercicesPageComponent } from "../pages/exercices-page/exercices-page.component";

const routeConfig: Routes = [
    {
      path: '',
      component: HomePageComponent,
    },
    {
      path: 'exercices',
      component: ExercicesPageComponent,
    }
  ];
  
  export default routeConfig;