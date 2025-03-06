import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';
import { DragonballComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [

 {
   path:'',
   component:CounterPageComponent,
 },
 {
  path: 'hero',
  component: HeroPageComponent
 },
 {
  path:'dragonball',
  component:DragonballComponent
 },
 {
  path:'dragonballSuper',
  component:DragonballSuperPageComponent
 },
 {
  path: '**',
  redirectTo: '',
 },


    
];
