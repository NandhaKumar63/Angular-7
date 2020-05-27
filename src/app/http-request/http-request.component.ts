import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.less']
})
export class HttpRequestComponent implements OnInit {

  errorMessage:string;
  constructor(private myService: MyService) { }

  ngOnInit(): void {

  }

  doGET() {
    console.log("GET");
    this.myService.GETRequest().subscribe(res => console.log(res));
  }

  doPOST() {
    console.log("POST");
    const postData = { moo: "Nandha", goo: "Kumar" };
    this.myService.POSTRequest(postData).subscribe(res => console.log(res));
  }

  doPUT() {
    console.log("PUT");
    const changedData = { moo: "Nandha", goo: "Kumar" };
    this.myService.PUTRequest(changedData).subscribe(res => console.log(res));
  }

  doDELETE() {
    console.log("DELETE");
    this.myService.DELETERequest().subscribe(res => console.log(res));
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
    this.myService.doGETAsObservableError().subscribe(
      res => console.log(res),
      errMsg => {
        this.errorMessage = errMsg.validations;
      }
    );
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
    this.myService.doGETWithHeaders().subscribe(
      res => console.log(res),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

}
