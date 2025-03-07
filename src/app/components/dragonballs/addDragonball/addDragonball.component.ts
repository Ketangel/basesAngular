import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
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


  newCharacter = output<Characters>();

  addCharacter() {
    if(!this.name() || !this.power() || this.power() <= 0 ){
      return;
    }
    const newCharacter: Characters = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    }
    // this.characters().push(newCharacter); metodo tradicional
    // this.characters.update((list) => [...list,newCharacter]);
    
    this.newCharacter.emit(newCharacter);
    this.restField();
  }

  restField(){
    this.name.set('');
    this.power.set(0)
  }



}



