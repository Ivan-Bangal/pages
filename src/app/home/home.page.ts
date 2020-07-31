import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = ' Texto Inicial';
  src = '/assets/icon/favicon.png';

  constructor() {
  }

  changeText(){
    this.text = 'Texto Novo  Ainda vamos brincar bem XD' ;
  }

  changeTheme(event){
    
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    }else{
      document.body.setAttribute('color-theme', 'light');
    }
    
  }

}
