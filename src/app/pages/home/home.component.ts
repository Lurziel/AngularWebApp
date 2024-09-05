import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HomeService, HousingLocation } from '../../services/home.service';
import { AccordionComponent, AccordionData } from '../../components/util/accordion/accordion.component';


@Component({
  selector: 'home-component',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  accordionData: AccordionData[] = [
    { title: "Vérification d'un palindrome", description: "" },
    { title: "La plus grande somme de sous-tableaux", description: `Given an integer array nums, find the subarray with the largest sum, and return its sum. Exemple: -2,1,-3,4,-1,2,1,-5,4 => 6 avec 4,-1,2,1`}
  ]


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
