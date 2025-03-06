import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonballs/character-list/character-list.component";
import { Characters } from '../../interfaces/character.interfaces';
import { AddDragonballComponent } from "../../components/dragonballs/addDragonball/addDragonball.component";



@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, AddDragonballComponent],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Characters[]>([
    {id: 0,name: 'Goku',power: 9001},
  ]);

}
