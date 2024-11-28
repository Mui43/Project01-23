import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private Nav:NavController) {
  }
  gotoedit(){
    this.Nav.navigateForward('/edit');
}
  gotoregister(){
  this.Nav.navigateForward('/register');
}
}
