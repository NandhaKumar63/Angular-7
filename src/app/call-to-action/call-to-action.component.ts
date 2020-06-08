import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.less']
})
export class CallToActionComponent implements OnInit {

  htmlContent: string;
  isReplaceUrl: boolean;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getContent();
  }


  getContent(): void {
    const url = 'https://0c171b0c-10ea-49c4-b04e-334147ab4479.mock.pstmn.io/html-content';
    this.http.get(url).subscribe((res: any) => {
      if (res && res.pageContent) {
        this.htmlContent = res.pageContent;
        this.isReplaceUrl = true;
      }
    })


  }

}
