import { Component } from '@angular/core';
import { AdditionComponent } from './addition/addition.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [AdditionComponent],
  //template:'<p>te</p>',
  templateUrl: './detail.component.html',
})
export class DetailComponent {

  sumn: number = 0;
  onAdded(inputChildValue:number): void{
    this.sumn += inputChildValue;
  }

}
