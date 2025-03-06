import { Component, computed, signal } from '@angular/core';


interface Characters {
  id: number,
  name: string,
  power: number
}


@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styles: ``
})
export class DragonballComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Characters[]>([
    {id: 0,name: 'Goku',power: 9001},
    {id: 1,name: 'Vegeta',power: 8008},
    {id: 2,name: 'picoro',power: 7008},
    {id: 3,name: 'yamchan',power: 500},
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
    this.characters.update((list) => [...list,newCharacter]);
    this.restField();
  }

  restField(){
    this.name.set('');
    this.power.set(0)
  }
}
