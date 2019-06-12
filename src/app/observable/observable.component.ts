import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.less']
})
export class ObservableComponent implements OnInit {
  customObservable: Observable<any>;
  constructor() { }

  ngOnInit() {
    let count = 0;
    this.customObservable = Observable.create((observer: Observer<any>) => {
      // console.log(observer.closed);
      setInterval(() => {
        if (count > 3) {
          observer.complete();
          observer.error(new Error('count exceeded 3!'));
        }
        observer.next(count);
        count++;
      }, 1000);
    });

    this.customObservable.subscribe((data) => {
      console.log('success ' + data);
    }, (error) => {
      console.log(error);
    },
      () => {
        console.log('complete');
      });
    // interval(1000).subscribe((value) => {
    //   console.log(new Date());
    // });
  }

}
