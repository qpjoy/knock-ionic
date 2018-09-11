import { Component, Input } from '@angular/core';

/**
 * Generated class for the CounterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'counter',
  templateUrl: 'counter.html'
})
export class CounterComponent {

  text: string;

  @Input() counterItem;

  public counter : number = 0;

  increment(){
    this.counter += 1;
  }

  decrement(){
    this.counter -= 1;
  }

  constructor() {
    this.text = 'Hello World';
  }

  add(item, i, status) {
    console.log(this.counterItem, ' - - - --add this - - -');
    let max = item.Quantity__c ? item.Quantity__c : 999;
    item.focused = true;
    console.log('jslog add clicked', item, i, new Date());
    if(!status || status == 'units') {

      // if (item.units == max) return;
      // item.units = item.units + i;

      this.counterItem['units'] += i;
      console.log('inininin - - - add !', this.counterItem);
      // item.goodUnits = item.units - item.badUnits;
    }else if(status == 'good') {

      if (item.goodUnits == max) return;
      item.goodUnits = item.goodUnits + i;
      item.units = item.goodUnits + item.badUnits;
    }else if(status == 'bad') {

      if (item.badUnits == max) return;
      item.badUnits = item.badUnits + i;
      item.units = item.goodUnits + item.badUnits;
      // item.goodUnits = item.units - item.badUnits;
    }
  }

  remove(item, i, status) {
    item.focused = true;
    if(!status || status == 'units') {
      console.log('jslog remove clicked', item, i);
      if (item.units == 0) return;
      item.units = item.units - i;
      item.goodUnits = item.units - item.badUnits;
    }else if(status == 'good') {
      console.log('jslog remove clicked', item, i);
      if (item.goodUnits == 0) return;
      item.goodUnits = item.goodUnits - i;
      item.units = item.goodUnits + item.badUnits;
    }else if(status == 'bad') {
      console.log('jslog remove clicked', item, i);
      if (item.badUnits == 0) return;
      item.badUnits = item.badUnits - i;
      item.units = item.goodUnits + item.badUnits;
    }
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
