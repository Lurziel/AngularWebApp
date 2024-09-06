import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-input',
  standalone: true,
  imports: [],
  templateUrl: './check-input.component.html',
})
export class CheckInputComponent {
  
  @Input() result:boolean = true;

  @Output() onChange = new EventEmitter<string>();
  
  valueChanged(value:Event){
    this.onChange.emit((value.target as HTMLInputElement).value);
  }

}
