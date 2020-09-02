import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DefaultHeroes } from './../Objects/defaultHeroes';
import { Hero } from '../Objects/hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  heroes = DefaultHeroes;
  selectedHero: Hero;
  http: HttpClient;
  string: string;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  text = ' Texto Inicial';
  srcFirstCard = '/assets/icon/favicon.png';

  constructor() {}


  changeText(){
    this.text = 'Texto Novo' ;
    const headers = new HttpHeaders()
            .set('username', 'username').set('password', 'password');
    console.log(this.http.get('http://localhost:8080/isutc/api/fenix/jersey/services/planos.json', {headers}));
  }

  changeTheme(event){
    if (event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    }else{
      document.body.setAttribute('color-theme', 'light');
    }
  }

  selectHero(heroe: Hero){
    this.selectedHero = heroe;
  }

}
