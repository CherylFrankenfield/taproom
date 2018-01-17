import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{barName}}</h1>
    <h3>Beer Menu</h3>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <edit-keg [childSelectedKeg]="selectedKeg"></edit-keg>
  </div>
  `
})

export class AppComponent {
  barName: string = 'The Angular Taproom';
  masterKegList: Keg[] = [
    new Keg('Barley Brown', 'Pallet Jack', 6.00, 6.5, 102),
    new Keg('Gigantic Brewing', 'Catch 23', 6.75, 5.8, 95),
    new Keg('Baerlic', 'New Noise', 5.75, 6.4, 162),
  ]

  editKeg(clickedKeg) {
    console.log('edit beer');
    console.log(clickedKeg);
  }

  isSold(clickedKeg: currentKeg) {
    for (var i = 0; i < this.Kegs.length; i++) {
    console.log(this.Kegs[i].amount);
    }
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
