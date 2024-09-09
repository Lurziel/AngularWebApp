import { Component } from '@angular/core';
import { AccordionComponent, AccordionData } from '../../components/util/accordion/accordion.component';
import { PalindromeComponent } from '../../components/exercices/palindrome/palindrome.component';
import { PageTitleComponent } from '../../components/util/page-title/page-title.component';

@Component({
  selector: 'app-exercices-page',
  standalone: true,
  imports: [AccordionComponent, PageTitleComponent],
  templateUrl: './exercices-page.component.html',
})
export class ExercicesPageComponent {
  pageTitle = 'Quelques exercices réalisés sur Leetcode';

  accordionData: AccordionData[] =
    [
      {
        title: "Vérification d'un palindrome", description: "", component: PalindromeComponent
      },
    ]

}
