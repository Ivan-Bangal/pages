import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = ' Texto Inicial';

  constructor() {}

  changeText(){
    this.text = 'Texto Novo  Ainda vamos brincar bem XD' ;
  }

}
