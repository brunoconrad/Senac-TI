import { Component } from '@angular/core';

import { Hero } from './componentes/main/hero';

@Component({
  selector: 'app-root',
  template: `
 
  <h1>Todos Herois</h1>
  <table border="1">
  <tr>
    <th *ngFor="let hero of heroes">{{ hero.name }}</th>
  </tr>
  <tr>
    <th *ngFor="let hero of heroes">{{ hero.id }}</th>
  </tr>
  </table>
  <h2>
  {{heroi}} seu id é {{ lol }}
  </h2>   

`
})
export class AppComponent {
 
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  lol = this.heroes[0].id
  heroi = this.heroes[0].name
}