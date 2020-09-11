import { DefaultHeroes } from './../Objects/defaultHeroes';
import { Hero } from './../Objects/hero';
import { Component, OnInit, Input, NgModule } from '@angular/core';



@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.component.html',
  styleUrls: ['./heroe-details.component.scss'],
})
export class HeroeDetailsComponent implements OnInit {

  @Input() heroe: Hero;

  heroes = DefaultHeroes;

  name: string;

  constructor() { }

  ngOnInit() {}
  onSubmit(){
    const hero = new Hero();
    hero.name = this.heroe.name;
    hero.id = this.heroe.id;

    this.heroes.push(hero);
  }
}
