import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-displayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-displayer.component.html',
})
export class CardsDisplayerComponent {
  //in class, the variable name must be complete, for not working
  // ['left-[0px]','left-[px]','left-[8px]','left-[12px]','left-[16px]','left-[20px]','left-[24px]','left-[28px]']
  position: string[] = ['left-[0px]','left-[16px]','left-[32px]','left-[48px]','left-[64px]','left-[80px]','left-[96px]','left-[112px]']
  @Input() cards: string[] | null = null
  @Input() hideCard: number[] = []

  // ngOnInit(){
  //   for(let i=0;i<10;i++){
  //     this.position[i] = 'left-['+i*5+'px]'
  //   }
  // }

}
