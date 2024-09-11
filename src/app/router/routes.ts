import { Routes } from "@angular/router";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { ExercicesPageComponent } from "../pages/exercices-page/exercices-page.component";
import { ProjectsPageComponent } from "../pages/projects-page/projects-page.component";

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
      path: 'projects',
      component: ProjectsPageComponent,
    }
  ];
  
  export default routeConfig;