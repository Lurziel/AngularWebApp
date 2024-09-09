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

  inputCss: string = `w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border ${this.result ? 'border-green-600':'border-red-600'} border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`
  valueChanged(event:Event){
    this.onChange.emit(event);
    console.log(this.result);
    
  }

}
