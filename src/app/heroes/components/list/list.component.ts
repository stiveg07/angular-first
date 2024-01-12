import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['Spiderman','Iroman','Hulk','Thor'];
  public nameDeletedHero?:string;

  removeLastHero():void{
    this.nameDeletedHero = this.heroNames.pop();

  }
}
