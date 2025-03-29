import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LargeCardComponent } from '../../components/util/card/large-card/large-card.component';

@Component({
  selector: 'home-page-component',
  standalone: true,
  imports: [CommonModule, LargeCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  projects: any[] = [
    {
      name: "GRICOR QCM",
      description: "Site permettant aux professeurs d'Helmo de corriger automatiquement des QCM au format papier. J'ai travaillé dessus durant 2 années en compagnie de 4 autres analystes-développeurs. le frontend est réalisé en React et le backend en Python.",
      img: "assets/images/qcm.jpg",
    },
    {
      name: "Helmo tutorat",
      description: "Site web et application mobile permettant aux élèves de s'inscrire à des tutorats ou d'en organiser. Le projet a été réalisé en binôme avec un autre analyste développeur. Le site est réalisé en React, l'application mobile en Flutter et le service REST en .Net.",
      img: "assets/images/small-class.jpg",
    },
    {
      name: "DungeonsHeros",
      description: "Site web dans lequel on peut créer une équipe de héros pour les envoyer dans des donjons pour monter de niveau. Le concept est inspiré de donjons et dragons. Le site est réalisé uniquement en .Net.",
      img: "assets/images/donjon-dragon.jpg",
    },
    {
      name: "Montage d'un raspberry",
      description: "Montage d'un raspberry pi 5, 8 gigas de RAM, avec un NMVe pour stocker l'OS et les données. L'objectif recherché est de faire des projets orientés IOT (internet des objets).",
      img: "assets/images/rasp-pi-5.jpg"
    },
    {
      name: "Raspberry : caméra et retransmission",
      description: "Installation d'une caméra sur le raspberry et développement d'une interface web permettant d'accéder à la retransmission en direct sur le réseau local.",
      img: "assets/images/rasp-pi-5-camera.jpg"
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
    },
    {
      name: "Portfolio : service REST réalisé en .Net 8.0",
      description: "Service backend utilisé pour faire appel à diverses API externes ainsi que pour s'authentifier dans le portfolio. L'ORM utilisé pour communiqué avec la bd (postgreSQL) est Entity Framework et le système d'authentification est réalisé avec Identity. Les déploiements du service REST et de la base de données ont été effectués sur Render.",
      img: "assets/images/dotnet.png"
    },
    {
      name: "Portfolio : site web version React et JS",
      description: "Version moins développée du portfolio qui utilise les technologies React et JavaScript. Le design est réalisé avec le framework Bootstrap.",
      img: "assets/images/react.png"
      //href: "https://react-web-app-rosy.vercel.app/"
    }
  ]
}
