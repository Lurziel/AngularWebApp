import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HomeService, HousingLocation } from '../../services/home.service';


@Component({
  selector: 'home-page-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  titleApp = 'tsjjrs';
  housesService: HomeService = inject(HomeService);
  
  houses!: HousingLocation[];
  color = "blue";
  
  constructor(){
    this.houses = this.housesService.getAllHousingLocations();
  }

  test() {
    this.color === "blue" ? this.color = "red" : this.color="blue"; 
  }

}
