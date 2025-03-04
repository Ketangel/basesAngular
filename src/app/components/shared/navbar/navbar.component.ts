import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink, // biblioteca de router link - simple
    RouterLinkActive, //
  ],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

}
