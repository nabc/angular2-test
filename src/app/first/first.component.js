import {Component ,Input ,Output ,EventEmitter} from "@angular/core";

@Component({
  selector: 'first',
  templateUrl: 'first.component.html',
})

export class FirstComponent {
  inputText:string='';
  setValue(){this.inputText='nabc';}
  constructor(){
  }
}
