import { effect, Injectable, signal } from '@angular/core';
import { Characters } from '../interfaces/character.interfaces';

// funcion aparate para el local storage
const loadFromLocalStorage = ():Characters[] => {
  const character =localStorage.getItem('characters');
  return character ? JSON.parse(character): [];
} 

@Injectable({
  providedIn: 'root'
})
export class DrangonballService {
  
  characterss = signal<Characters[]>(loadFromLocalStorage());

  saveToLocalStores = effect( () => {
    // console.log(`Character count:  ${this.characterss().length}`)
    localStorage.setItem('characters',JSON.stringify(this.characterss()));  
  })

  addCharacter(character: Characters){
  this.characterss.update( (list) => [...list,character]);
  }


}
