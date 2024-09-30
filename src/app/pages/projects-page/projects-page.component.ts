import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/util/page-title/page-title.component';
import { LinkButtonComponent } from '../../components/util/link-button/link-button.component';
import { LargeCardComponent } from '../../components/util/card/large-card/large-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, LinkButtonComponent, LargeCardComponent],
  templateUrl: './projects-page.component.html',
})
export class ProjectsPageComponent {
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
      description: "Montage d'un raspberry pi 5, 8 gigas de RAM, avec un NMVe pour stocker l'OS et les données. L'objectif recherché est de faire des projets orientés IOT (internet des objects).",
      img: "assets/images/rasp-pi-5.jpg"
    },
    {
      name: "Portofolio version Angular 18.0 et TS",
      description: "Site réalisé en Angular et TypeScript. le CSS est géré avec le framework Tailwind CSS et Material Tailwind pour une plus grande liberté d'action. Le déploiement est effectué sur Vercel.",
      img: "assets/images/angular.png"
    },
    {
      name: "Service REST en .Net 8.0",
      description: "Service backend utilisé pour faire appel à diverses API externes ainsi que pour s'authentifier dans le portofolio. L'ORM utilisé pour communiqué avec la bd (postgreSQL) est Entity Framework et le framework utilisé pour l'authentification est Identity. Les déploiements du service REST et de la base de données ont été effectués sur Render. Le lien de l'API est le suivant : https://dotnetrest.onrender.com",
      img: "assets/images/dotnet.png"
    },
    {
      name: "Portofolio version React et JS",
      description: "Version moins développée du portofolio qui utilise les technologies React et JavaScript. Le CSS est fait avec le framework Bootstrap. Lien vers le site : https://react-web-app-rosy.vercel.app/",
      img: "assets/images/react.png"
    },
  ]
}
