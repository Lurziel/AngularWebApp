import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-input.component.html',
})
export class ResultInputComponent {
  
  @Input() result:string = "/";

  @Output() onChange = new EventEmitter<Event>();

  valueChanged(event:Event){
    this.onChange.emit(event);
  }

}
