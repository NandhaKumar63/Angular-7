import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, OnDestroy, AfterContentInit } from '@angular/core';
import { initHour } from 'ngx-bootstrap/chronos/units/hour';
import { SharedMessageService } from '../shared/services/shared-message.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.less']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit {

  @Input() message: string;
  @Input() enabled: boolean;

  clearSubscription: Subscription;

  constructor(private sharedMsgService: SharedMessageService) {
    console.log("Constructor " + this.message);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit " + this.message);

    this.clearSubscription = this.sharedMsgService.getDestroySubject$().subscribe((enabled: boolean) => {
      console.log("Inside Subscribe " + enabled);
    });
  }

  ngDoCheck(): void {
    // console.log("ngDoCheck");
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
  }

}
