import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {


  name = signal('iroman');
  age = signal(45);

  heroDescription = computed( () => {
    const description =  `${ this.name() } - ${ this.age() }`;
    return description;
  })



  changeHero() {
    this.name.update(value => value = 'Spiderman' );
    this.age.update(value => value = 22);
  }

  changeAge() {
    this.age.update(value => value = 66);
  }
    
  resetForm() {
    this.name.update(value => value = 'iroman' );
    this.age.update(value => value = 45);
  }



}
