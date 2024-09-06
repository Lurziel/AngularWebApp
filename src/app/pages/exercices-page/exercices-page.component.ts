import { Component } from '@angular/core';
import { AccordionComponent, AccordionData } from '../../components/util/accordion/accordion.component';
import { PalindromeComponent } from '../../components/exercices/palindrome/palindrome.component';

@Component({
  selector: 'app-exercices-page',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './exercices-page.component.html',
})
export class ExercicesPageComponent {

  accordionData: AccordionData[] =
    [
      {
        title: "Vérification d'un palindrome", description: "", component: PalindromeComponent
      },
    ]

}
