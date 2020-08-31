import { Hero } from './../Objects/hero';
import { Component, OnInit, Input, NgModule } from '@angular/core';



@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.component.html',
  styleUrls: ['./heroe-details.component.scss'],
})
export class HeroeDetailsComponent implements OnInit {

  @Input() heroe: Hero;

  name: string;

  constructor() { }

  ngOnInit() {}

}
