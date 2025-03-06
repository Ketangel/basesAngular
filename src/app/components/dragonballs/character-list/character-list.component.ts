import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { Characters } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  characters = input.required<Characters[]>();
  listName = input.required<string>();



}
