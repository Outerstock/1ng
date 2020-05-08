import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service'
@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {
  title = 'ng2';
  name: string; 
  helloService: HelloService;
  constructor(
    private helloSw: HelloService
    ) {
    this.helloService = helloSw
  }
  setName(name){
    this.name = name
    this.helloSw.hello()
  }
  

  ngOnInit(): void {
  }
  

}
