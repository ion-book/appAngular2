import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  twitter: string = '@nicobytes';
  name: string = 'nicolas';
  names: string[] = [
    'nicolas',
    'kattya',
    'andrea',
    'valentina',
    'nancy',
    'john'
  ];

  constructor(public navCtrl: NavController) {
    
  }

  clickedButton(){
    alert("Hola");
  }

  addName(newName: string){
    this.names.push(newName);
  }

}
