import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Characters } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'app-add-dragonball',
  imports: [],
  templateUrl: './addDragonball.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDragonballComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Characters[]>([
    {id: 0,name: 'Goku',power: 9001},
  ]);



  addCharacter() {
    if(!this.name() || !this.power() || this.power() <= 0 ){
      return;
    }
    const newCharacter: Characters = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    // this.characters().push(newCharacter); metodo tradicional
    // this.characters.update((list) => [...list,newCharacter]);
    console.log(newCharacter);
    this.restField();
  }

  restField(){
    this.name.set('');
    this.power.set(0)
  }



}



