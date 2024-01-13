import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [{
    id:uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id:uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id:uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  public onNewCharacter(character: Character): void {
    // ...character: lo que hace es esparcir todos los datos que vienen del parametro(character: Character)
    // en newCharacter:Character en vez de mapear uno por uno
    const newCharacter:Character = {
      id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  public onDeleteCharacter(index: string): void {
    this.characters = this.characters.filter(x=> x.id !== index);
  }

}
