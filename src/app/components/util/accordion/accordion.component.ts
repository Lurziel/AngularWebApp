import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule ,NgTemplateOutlet],
  templateUrl: './accordion.component.html',
})


export class AccordionComponent{

  @Input() data: AccordionData[] = [];
 
  toggleAccordion(index:number):void {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // SVG for Minus icon
    const minusSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
    </svg>
  `;

    // SVG for Plus icon
    const plusSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
    </svg>
  `;

    // Toggle the content's max-height for smooth opening and closing
    if (content!.style.maxHeight && content!.style.maxHeight !== '0px') {
        content!.style.maxHeight = '0';
        icon!.innerHTML = plusSVG;
    } else {
        content!.style.maxHeight = content!.scrollHeight + 'px';
        icon!.innerHTML = minusSVG;
    }
}
}

export class AccordionData {
  title:string ="";
  description:string="";
  component:any;

  constructor(component:Component) {
    this.component = component;
  }
}