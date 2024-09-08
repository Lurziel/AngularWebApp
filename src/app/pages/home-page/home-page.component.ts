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

carouselData : any[] = [
    { name: "React", img: '../../assets/images/react.png', description: "Le langage que j'ai utilisé pour pouvoir afficher ce site." },
    { name: ".Net", img: "../../assets/images/dotnet.png", description: "Le langage utilisé pour tirer les ficelles derrière le site." },
    { name: "Visual Studio Code", img: "../../assets/images/vscode.png", description: "Mon IDE favori (car gratuit et customizable)." },
    { name: "LeetCode", img: "../../assets/images/vscode.png", description: "Le site sur lequel je travaille ma logique et mon algorythmie" },
]

sitesList :any[] = [
    { name: "Bootstrap", description: "Bootstrap est un framework front-end open-source qui facilite la création de sites web réactifs et modernes. Il offre une collection de composants CSS et JavaScript prédéfinis, tels que des grilles, des boutons, et des formulaires, pour accélérer le développement web. Il est largement utilisé pour son efficacité et sa compatibilité avec différents navigateurs.", href: "https://getbootstrap.com/" },
    { name: "Router", description: "React Router est une bibliothèque JavaScript qui permet de gérer la navigation entre les différentes pages d'une application React de manière dynamique. Elle permet de créer des routes, de définir des paramètres d'URL, et de gérer la transition entre les vues, facilitant ainsi le développement d'applications monopage (SPA). Elle est largement utilisée pour sa flexibilité et sa capacité à gérer des interfaces complexes.", href: "https://reactrouter.com/en/main" },
    { name: "Colorhunt", description: "Color Hunt est une plateforme en ligne qui propose une vaste collection de palettes de couleurs créées par des utilisateurs. Les palettes, organisées par thèmes et popularité, sont utilisées par des designers et développeurs pour inspirer et harmoniser leurs projets créatifs. Color Hunt est apprécié pour sa simplicité et la qualité de ses combinaisons de couleurs.", href: "https://colorhunt.co/" },
    { name: "Bootstrap icons", description: "Bootstrap Icons est une bibliothèque d'icônes vectorielles open-source conçue pour être utilisée avec Bootstrap, mais compatible avec d'autres frameworks. Elle propose plus de 1 500 icônes en format SVG, couvrant une large gamme de besoins graphiques pour les interfaces utilisateur. Faciles à intégrer et personnalisables, ces icônes sont largement utilisées pour enrichir les designs web.", href: "https://icons.getbootstrap.com/?q=sheet" },
    { name: "Tailwind CSS", description: "", href: "https://tailwindcss.com/docs/installation" },
    { name: "Material Tailwind", description: "", href: "https://www.material-tailwind.com/" },
    { name: "Refactoring Guru", description: "Refactoring Guru est une ressource en ligne dédiée à l'apprentissage des concepts de refactoring et des modèles de conception logicielle. Le site propose des explications claires, des exemples concrets, et des illustrations pour aider les développeurs à améliorer la qualité et la structure de leur code. Il est particulièrement apprécié pour sa pédagogie accessible et son contenu riche en best practices.", href: "https://refactoring.guru/fr/design-patterns/catalog" }
]

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
