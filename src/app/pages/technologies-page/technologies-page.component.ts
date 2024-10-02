import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LargeCardComponent } from '../../components/util/card/large-card/large-card.component';
import { SmallCardComponent } from '../../components/util/card/small-card/small-card.component';
import { PageTitleComponent } from '../../components/util/page-title/page-title.component';

@Component({
  selector: 'app-technologies-page',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, SmallCardComponent, LargeCardComponent],
  templateUrl: './technologies-page.component.html',
})
export class TechnologiesPageComponent {
  
  pageTitle = 'Mes technologies utilisées';

  carouselData: any[] = [
    {
      name: "React",
      img: 'assets/images/react.png',
      description: "Le langage que j'ai utilisé pour pouvoir afficher ce site."
    },
    {
      name: ".Net",
      img: "assets/images/dotnet.png",
      description: "Le langage utilisé pour tirer les ficelles derrière le site."
    },
    {
      name: "Visual Studio Code",
      img: "assets/images/vscode.png",
      description: "Mon IDE favori (car gratuit et customizable)."
    },
    {
      name: "LeetCode",
      img: "assets/images/vscode.png",
      description: "Le site sur lequel je travaille ma logique et mon algorythmie"
    },
  ]

  sitesList: any[] = [
    {
      name: "LeetCode",
      description: "LeetCode est une plateforme en ligne populaire dédiée à la préparation aux entretiens techniques et à l'amélioration des compétences en programmation. Elle propose des milliers de problèmes de codage couvrant divers algorithmes, structures de données, et concepts informatiques, avec des solutions dans plusieurs langages de programmation. En plus des exercices, LeetCode offre également des concours, des tutoriels et des discussions communautaires pour aider les utilisateurs à se préparer aux entretiens dans les grandes entreprises technologiques.",
      href: "https://leetcode.com/"
    },
    {
      name: ".Net",
      description: ".NET est une plateforme de développement créée par Microsoft, utilisée pour construire une large gamme d'applications, y compris des applications web, mobiles, de bureau et de cloud. Elle offre un environnement d'exécution commun (CLR) et des bibliothèques pour plusieurs langages de programmation comme C#, F#, et Visual Basic. .NET est open-source, multiplateforme, et inclut des frameworks comme ASP.NET pour les applications web et Xamarin pour le développement mobile.",
      href: "https://learn.microsoft.com/en-us/dotnet/"
    },
    {
      name: "Angular",
      description: "Angular est un framework open-source de développement web, maintenu par Google, utilisé pour créer des applications web dynamiques et interactives. Basé sur TypeScript, il permet de structurer et de modulariser le code, tout en facilitant la gestion des données avec des outils comme le two-way data binding et les services. Angular est largement utilisé pour le développement d'applications à page unique (SPA), offrant des performances élevées et une architecture bien définie pour les projets complexes.",
      href: "https://angular.dev/overview"
    },
    {
      name: "Visual Studio Code",
      description: "Visual Studio Code (VS Code) est un éditeur de code source gratuit et open-source, développé par Microsoft, qui supporte une grande variété de langages de programmation. Connu pour sa légèreté et ses fonctionnalités puissantes, il offre une prise en charge intégrée de Git, des extensions pour ajouter des fonctionnalités supplémentaires, et des outils de débogage avancés. Très populaire auprès des développeurs, VS Code est apprécié pour sa flexibilité, sa personnalisation et sa compatibilité multiplateforme (Windows, macOS, Linux).",
      href: "https://code.visualstudio.com/download"
    },
    {
      name: "OVH",
      description: "OVH (OVHcloud) est une entreprise française spécialisée dans les services d'hébergement cloud et d'infrastructure informatique, fondée en 1999. Elle propose une large gamme de solutions, allant des serveurs dédiés aux services cloud, en passant par l'hébergement web et le stockage de données. OVHcloud est reconnue pour ses infrastructures à grande échelle, avec des centres de données situés dans le monde entier, et sa capacité à fournir des services performants à des prix compétitifs.",
      href: "https://www.ovhcloud.com/fr/"
    },
    {
      name: "Axios",
      description: "Axios est une bibliothèque JavaScript populaire utilisée pour effectuer des requêtes HTTP depuis le navigateur ou Node.js. Elle facilite l'envoi et la gestion des requêtes asynchrones avec une syntaxe simple et des promesses, tout en offrant des fonctionnalités comme l'annulation de requêtes, la gestion des erreurs et la personnalisation des en-têtes. De plus, Axios supporte automatiquement la conversion des données en JSON, ce qui en fait un outil pratique pour interagir avec des API REST.",
      href: "https://www.npmjs.com/package/axios"
    },
    {
      name: "Tailwind CSS",
      description: "Tailwind CSS est un framework utilitaire pour CSS qui permet de styliser rapidement des interfaces en utilisant des classes prédéfinies directement dans le HTML. Il favorise une approche « utility-first » où les développeurs peuvent appliquer des styles spécifiques sans écrire de CSS personnalisé. Cela rend le développement plus rapide et maintient le code plus lisible et modulaire.",
      href: "https://tailwindcss.com/docs/installation"
    },
    {
      name: "Material Tailwind",
      description: "Material Tailwind est une extension de Tailwind CSS qui combine les classes utilitaires de Tailwind avec les composants visuels de Material Design de Google. Il offre des composants pré-stylisés, comme des boutons, des cartes et des barres de navigation, tout en utilisant l'approche « utility-first » de Tailwind. Cela permet de créer rapidement des interfaces modernes et esthétiques tout en conservant la flexibilité de personnalisation du CSS.",
      href: "https://www.material-tailwind.com/"
    },
    {
      name: "Heroicon",
      description: "Heroicon est une bibliothèque d'icônes open-source développée par l'équipe derrière Tailwind CSS. Elle propose une collection de plus de 230 icônes vectorielles au format SVG, conçues pour être simples, épurées et adaptées à une utilisation dans des interfaces utilisateur modernes. Heroicons se décline en deux styles principaux : Outline (contour) et Solid (plein), offrant une flexibilité d'usage en fonction des besoins graphiques.",
      href: "https://heroicons.com/outline"
    },
    {
      name: "Bootstrap",
      description: "Bootstrap est un framework front-end open-source qui facilite la création de sites web réactifs et modernes. Il offre une collection de composants CSS et JavaScript prédéfinis, tels que des grilles, des boutons, et des formulaires, pour accélérer le développement web. Il est largement utilisé pour son efficacité et sa compatibilité avec différents navigateurs.",
      href: "https://getbootstrap.com/"
    },
    {
      name: "Bootstrap icons",
      description: "Bootstrap Icons est une bibliothèque d'icônes vectorielles open-source conçue pour être utilisée avec Bootstrap, mais compatible avec d'autres frameworks. Elle propose plus de 1 500 icônes en format SVG, couvrant une large gamme de besoins graphiques pour les interfaces utilisateur. Faciles à intégrer et personnalisables, ces icônes sont largement utilisées pour enrichir les designs web.",
      href: "https://icons.getbootstrap.com/?q=sheet"
    },
    {
      name: "Refactoring Guru",
      description: "Refactoring Guru est une ressource en ligne dédiée à l'apprentissage des concepts de refactoring et des modèles de conception logicielle. Le site propose des explications claires, des exemples concrets, et des illustrations pour aider les développeurs à améliorer la qualité et la structure de leur code. Il est particulièrement apprécié pour sa pédagogie accessible et son contenu riche en best practices.",
      href: "https://refactoring.guru/fr/design-patterns/catalog"
    },
    {
      name: "Colorhunt",
      description: "Color Hunt est une plateforme en ligne qui propose une vaste collection de palettes de couleurs créées par des utilisateurs. Les palettes, organisées par thèmes et popularité, sont utilisées par des designers et développeurs pour inspirer et harmoniser leurs projets créatifs. Color Hunt est apprécié pour sa simplicité et la qualité de ses combinaisons de couleurs.",
      href: "https://colorhunt.co/"
    },
  ]

}
