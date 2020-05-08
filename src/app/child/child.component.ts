import { Component, OnInit , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Output() inputValueFromChild: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
  }
  
  emitValue(value) {
    console.log(value);
    this.inputValueFromChild.emit(value);
  }
}
