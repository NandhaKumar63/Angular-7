import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.less']
})
export class ChildOneComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap): void => {
        debugger;
      });

  }

}
