import { Component } from "@angular/core";

@Component({
  template:`<h1>{{title}}</h1>
  <hr>
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="reset()">reset</button>
  <button (click)="increaseBy(1)">+1</button>`,
  selector: 'app-counter'
})

export class CounterComponent{
  title = 'Counter';

  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  reset():void{
    this.counter =10;
  }

}
