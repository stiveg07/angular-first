import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: 'list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() //   @Input() Recibe datos del padre
  public characterList: Character[] = [{
    name: 'Trunks', power: 10
  }];

  @Output()
  public onEmitDeleteIdCharacter: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(index?: string): void {
    if(!index) return;
    this.onEmitDeleteIdCharacter.emit(index);
  }

}
