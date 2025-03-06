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

  characters = signal<Characters[]>([
    {id: 0,name: 'Goku',power: 9001},
    {id: 1,name: 'Vegeta',power: 8008},
    {id: 2,name: 'picoro',power: 7008},
    {id: 3,name: 'yamchan',power: 500},
  ]);

}
