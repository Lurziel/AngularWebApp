import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LargeCardComponent } from '../../components/util/card/large-card/large-card.component';
import { PageTitleComponent } from '../../components/util/page-title/page-title.component';
import { LinkButtonComponent } from '../../components/util/link-button/link-button.component';

@Component({
  selector: 'home-page-component',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, LinkButtonComponent, LargeCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  notes: any[] = [
    {
      name: "Notes sur Angular",
      href: "assets/files/notes_angular.txt"
    },
    {
      name: "Notes sur Dotnet",
      href: "assets/files/notes_dotnet.txt"
    },
    {
      name: "Notes sur raspberry",
      href: "assets/files/notes-raspberry.txt"
    }
  ]

  projects: any[] = [
    {
      name: "Montage d'un raspberry",
      description: "Montage d'un raspberry pi 5, 8 gigas de RAM, avec un NMVe pour stocker l'OS et les données. L'objectif recherché est de faire des projets orientés IOT (internet des objets).",
      img: "assets/images/rasp-pi-5.jpg"
    },
    {
      name: "Raspberry : site web réalisé en Preact",
      description: "Interface web simple permettant d'interagir à distance avec le raspberry pi. Le site est déployé directement sur le raspberry pour que ce dernier soit autonome.",
      img: "assets/images/Preact.png"
    },
    {
      name: "Raspberry : service REST réalisé en python",
      description: "Ce service REST sert de pont entre le site Preact et le raspberry pi. Il est réalisé avec le framework FastAPI et également déployé sur le raspberry.",
      img: "assets/images/Python-programming-logo-on-transparent-background-PNG.png"
    },
    {
      name: "Portfolio : site web version Angular 18.0 et TS",
      description: "Site réalisé en Angular et TypeScript. Le design est réalisé avec le framework Tailwind CSS et Material Tailwind pour une plus grande liberté d'action. Le déploiement est effectué sur Vercel.",
      img: "assets/images/angular.png",
      href: "https://www.charles-depaz.ovh/"
    },
    {
      name: "Portfolio : service REST réalisé en .Net 8.0",
      description: "Service backend utilisé pour faire appel à diverses API externes ainsi que pour s'authentifier dans le portfolio. L'ORM utilisé pour communiqué avec la bd (postgreSQL) est Entity Framework et le système d'authentification est réalisé avec Identity. Les déploiements du service REST et de la base de données ont été effectués sur Render.",
      img: "assets/images/dotnet.png"
    },
    {
      name: "Portfolio : site web version React et JS",
      description: "Version moins développée du portfolio qui utilise les technologies React et JavaScript. Le design est réalisé avec le framework Bootstrap.",
      img: "assets/images/react.png",
      href: "https://react-web-app-rosy.vercel.app/"
    },
  ]
}
