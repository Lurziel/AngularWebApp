import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HomeService, HousingLocation } from './home.service';


@Component({
  selector: 'home-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  titleApp = 'Hello worlkkjnd';
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
