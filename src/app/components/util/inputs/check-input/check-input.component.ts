import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-input.component.html',
})
export class CheckInputComponent {
  
  @Input() result:boolean = true;
  @Output() onChange = new EventEmitter<Event>();

  valueChanged(event:Event){
    this.onChange.emit(event);    
  }

}
