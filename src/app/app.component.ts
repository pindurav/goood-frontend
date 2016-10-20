import { Component } from '@angular/core';
import * as Rx from 'rxjs';
var $ = require('jQuery');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: any[] = [];

  title = 'app works!';
  total_items = 300; //10 000, ma byt ve vysledku 50.000 lidi
  already_loaded_count = 0;
  loadingInProgress = true;

  constructor() {
    this.loadingInProgress = false; //'kliknuti na loadMore'

    this.startLoading();
    this.listenScroll();
  }

  //http://stackoverflow.com/a/33226843
  listenScroll() {
    console.log($);

    var scrolling = Rx.Observable.
      fromEvent($(window)[0], 'scroll').
      map((se: any) => {
        console.log(se);
        return {
          // momentalne nejede..
          scrollTop: se.target.scrollTop,
          scrollHeight: se.target.scrollHeight,
          clientHeight: se.target.clientHeight
        };
      });
    // .
    // filter((x) => x.clientHeight === x.scrollHeight - x.scrollTop);

    scrolling.subscribe(x => {
      console.log(`scroll sucess ${x.scrollHeight}`);
      this.total_items += 5;
      this.startLoading();
    });
  }

  removeNotVisibleElement() {
    $('*').each(function () {
      if ($(this).not(':visible')) {
        $(this).remove();
      }
    });
  }

  loadData() {
    var self = this;
    for (; this.loadingInProgress && this.already_loaded_count < +this.total_items; this.already_loaded_count++) {

      // asynchronni nacitani, jakoby trva po 100ms
      setTimeout(function () {
        console.log(self.already_loaded_count);
        self.items.push(self.already_loaded_count);
      }, 100);
    }
  }

  startLoading() {
    this.loadingInProgress = true;
    this.loadData();
    this.loadingInProgress = false;
  }
}
