import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name: string = `ironMan`;
  public age: number = 20;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getheroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = `Spiderman`;
  }

  changeAge():void{
    this.age = 30;
  }

  reset():void{
    this.name = `ironMan`;
    this.age = 20;
  }
}
