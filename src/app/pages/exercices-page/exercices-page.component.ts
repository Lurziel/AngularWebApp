import { Component } from '@angular/core';
import { AccordionComponent, AccordionData } from '../../components/util/accordion/accordion.component';
import { PalindromeComponent } from '../../components/exercices/palindrome/palindrome.component';
import { PageTitleComponent } from '../../components/util/page-title/page-title.component';
import { BalisesComponent } from '../../components/exercices/balises/balises.component';
import { LongestCommonPrefixComponent } from '../../components/exercices/longest-common-prefix/longest-common-prefix.component';
import { MajorityElementComponent } from '../../components/exercices/majority-element/majority-element.component';
import { LengthOfLastWordComponent } from '../../components/exercices/length-of-last-word/length-of-last-word.component';
import { FirstMissingPositiveComponent } from '../../components/exercices/first-missing-positive/first-missing-positive.component';
import { MaximumSubarrayComponent } from '../../components/exercices/maximum-subarray/maximum-subarray.component';

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
      { title: "Vérification d'un palindrome", description: "", component: PalindromeComponent },
        { title: "Vérification des balises", description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type. Exemple: ()({()})[()]`, component: BalisesComponent },
        { title: "Le plus long préfixe commun", description: `Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "". Exemple: flower, flow, flight`, component: LongestCommonPrefixComponent },
        { title: "L'élément majoritaire (absolu) du tableau", description: `Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. Exemple: 1, 1, 2, 2, 2, 3, 2, 1, 3, 2 => 2`, component: MajorityElementComponent },
        { title: "La taille du dernier mot", description: `Given a string s consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.`, component: LengthOfLastWordComponent },
        { title: "Le plus petit nombre positif manquant", description: `Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums. Exemple: 3,4,-1,1 => 2`, component: FirstMissingPositiveComponent },
        { title: "La plus grande somme de sous-tableaux", description: `Given an integer array nums, find the subarray with the largest sum, and return its sum. Exemple: -2,1,-3,4,-1,2,1,-5,4 => 6 avec 4,-1,2,1`, component: MaximumSubarrayComponent }
    ]

}
