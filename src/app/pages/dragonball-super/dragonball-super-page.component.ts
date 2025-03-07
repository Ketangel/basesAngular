import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonballs/character-list/character-list.component";
import { Characters } from '../../interfaces/character.interfaces';
import { AddDragonballComponent } from "../../components/dragonballs/addDragonball/addDragonball.component";
import { DrangonballService } from '../../services/drangonball.service';



@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, AddDragonballComponent],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``
})
export class DragonballSuperPageComponent {

  // //forma tradicional
  // constructor( 
  //   private dragonBallSuper: DrangonballService,
  // ){}

  // nueva forma
  public dragonBallSuperService = inject(DrangonballService)



}
