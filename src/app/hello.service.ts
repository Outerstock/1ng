import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }
  hello() {
    console.log('log from service!');
  }
}
