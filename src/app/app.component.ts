import { Component } from '@angular/core';
var $ = require('jquery');

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
    this.loadingInProgress = false; 'kliknuti na loadMore'
    this.switchLoading();

    console.log($);
  }

//http://stackoverflow.com/a/33226843
//   function listenScroll()
//   {
//     var scrolling = Rx.Observable.
//         fromEvent($('.infinite')[0], 'scroll').
//         map((se)=> {
//             return {
//                 scrollTop:se.target.scrollTop,
//                 scrollHeight: se.target.scrollHeight,
//                 clientHeight: se.target.clientHeight
//             };
//         }).
//         filter((x)=> x.clientHeight ===  x.scrollHeight - x.scrollTop);

// mouseup$ = Rx.Observable.fromEvent($('.infinite')[0], 'mouseup');
// // mouseup or keyup or touchend or else
// var getNewData$ = scrolling
//     .flatMap(function (scroll_data) {
//         return Rx.Observable
//             .just(scroll_data)
//             .delay(1000)
//             .takeUntil(mouseup$);
//     });
//   }



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

  switchLoading() {
    // lepe na scroll napr: https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/doc/operators/scroll.md
    this.loadingInProgress = !this.loadingInProgress;
    console.log(this.loadingInProgress);

    this.loadData();
    this.loadingInProgress = !this.loadingInProgress;
    console.log(this.loadingInProgress);
  }
}
