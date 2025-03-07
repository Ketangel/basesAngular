import { Injectable, signal } from '@angular/core';
import { Characters } from '../interfaces/character.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DrangonballService {


  characterss = signal<Characters[]>([
    {id: 0,name: 'Goku',power: 9001},
  ]);

  addCharacter(character: Characters){
  this.characterss.update( (list) => [...list,character]);
  }


}
