import { AsdPage } from './../asd/asd.page';
import { AppRoutingModule } from './../app-routing.module';
import { Routes } from '@angular/router';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { DefaultHeroes } from './../Objects/defaultHeroes';
import { Hero } from '../Objects/hero';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Chooser } from '@ionic-native/chooser/ngx';


interface Plano {
  plano: string;
  planoNome: string;
  activo: boolean;
  curso: string;
  cursoNome: string;
  cursoGrau: string;
  cursoGrauNome: string;
  cursoAreaFormacao: string;
  disciplina: string;
  disciplinaNome: string;
  nivel: string;
  semestre: string;
  credito: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  heroes = DefaultHeroes;
  selectedHero: Hero;
  plano$: Observable<Plano[]>;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  routes: Routes = [
    {
      path: 'tabs',
      component: HomePage,
      children: [
        {
          path: 'schedule',
          children: [
            {
              path: '',
              loadChildren: '../asd/asd.module#AsdModule'
            }
          ]
        },
        {
          path: '',
          redirectTo: '/app/tabs/schedule',
          pathMatch: 'full'
        }
      ]
    }
  ];


  text = ' Texto Inicial';
  srcFirstCard = '/assets/icon/business.png';
  url = 'http://192.168.81.230:8080/isutc/api/fenix/angular/services/plano';

  constructor(private http: HttpClient, private chooser: Chooser) { }

  changeText() {
    this.text = 'Texto Novo';
    const headers = new HttpHeaders().append('username', 'username').append('password', 'password');
    this.plano$ = this.http
      .get<Plano[]>(
        this.url,
        {
          headers,
          responseType: 'json',
          withCredentials: true,
        });
    this.http.get<Plano[]>(this.url, {
      headers,
      responseType: 'json',
      withCredentials: true,
    }).subscribe(
      data => alert(data),
      error => alert(error.url)
    );

    this.plano$.forEach(element => {
      console.log(element);
    });

  }

  changeTheme(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  selectHero(heroe: Hero) {
    this.selectedHero = heroe;
  }

  loadImageFromDevice() {

    this.chooser.getFile()
      .then(file => {
        alert(file ? file.name : 'canceled');
        this.srcFirstCard = file.dataURI;
      })
      .catch((error: any) => console.error(error));

  }

}
