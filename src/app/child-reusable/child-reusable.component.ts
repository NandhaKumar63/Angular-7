import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-reusable',
  templateUrl: './child-reusable.component.html',
  styleUrls: ['./child-reusable.component.less']
})
export class ChildReusableComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {


  @Input() name: string = "";
  @Input() title: string = "";
  constructor() {
    console.log('constructor ' + name);
  }
  clicked(): void {
    console.log("clicked");
    
    setTimeout(() => {
      console.log("settimeout");
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    console.log("OnInit");
  }

  ngDoCheck(): void {
    console.log("docheck");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }

  ngOnDestroy(): void {
    console.log("onDestroy");
  }

}
