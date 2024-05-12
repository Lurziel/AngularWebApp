import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {
  @Input() inputValue:number = 0;
  
  @Output() added = new EventEmitter<number>();
  add(){
    this.added.emit(this.inputValue);
  }

  getInputValue(event: Event): number {
    return Number((event.target as HTMLInputElement).value);
  }

}
