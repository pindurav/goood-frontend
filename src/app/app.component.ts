import { Component } from '@angular/core';

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

  switchLoading() {
    // lepe na scroll napr: https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/doc/operators/scroll.md
    this.loadingInProgress = !this.loadingInProgress;
    console.log(this.loadingInProgress);

    this.loadData();
    this.loadingInProgress = !this.loadingInProgress;
    console.log(this.loadingInProgress);
  }
}