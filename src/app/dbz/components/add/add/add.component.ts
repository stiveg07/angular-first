import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: 'add.component.html',
  styleUrl: './add.component.css',
})
export class AddCharacterComponent {

  @Output()
  public onEmitNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  public emitCharacter(): void {
    if(this.character.name.length == 0) return;
    this.onEmitNewCharacter.emit(this.character);
    this.character= {name:'', power:0};
  }
}
