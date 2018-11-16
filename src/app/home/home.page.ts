import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  // tslint:disable-next-line:no-inferrable-types
  myVariable: string = 'the force is with me!';

  updateMyValue() {
    this.myVariable = 'Now the force is even stronger!';
  }
}
