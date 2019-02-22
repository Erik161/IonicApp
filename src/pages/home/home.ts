import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

// metodo mandar a llamar a paginas y recordar ver el import arriba siempre
  NavegarALugar() {
    this.navCtrl.push(LugarPage);
  }

}
