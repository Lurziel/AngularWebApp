import { Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { DetailComponent } from "../detail/detail.component";

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'detail',
      component: DetailComponent,
    }
  ];
  
  export default routeConfig;