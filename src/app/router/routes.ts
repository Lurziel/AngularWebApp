import { Routes } from "@angular/router";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { DetailComponent } from "../detail/detail.component";
import { ExercicesPageComponent } from "../pages/exercices-page/exercices-page.component";

const routeConfig: Routes = [
    {
      path: '',
      component: HomePageComponent,
    },
    {
      path: 'detail',
      component: DetailComponent,
    },
    {
      path: 'exercices',
      component: ExercicesPageComponent,
    }
  ];
  
  export default routeConfig;