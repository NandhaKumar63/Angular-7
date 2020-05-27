import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  apiRoot: string = environment.apiRootURL;
  constructor(private http: HttpClient) {

  }

  GETRequest(): Observable<any> {
    let url = `${this.apiRoot}/get`;
    // Adding Query Params
    const httpOptions = {
      params: new HttpParams().set("seacrhBy", "name").set("orderBy", "date")
    };
    return this.http.get(url, httpOptions).pipe(map((res) => res));
  }

  POSTRequest(body: any): Observable<any> {
    let url = `${this.apiRoot}/post`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    return this.http.post(url, body, httpOptions);
  }

  PUTRequest(body: any): Observable<any> {
    let url = `${this.apiRoot}/put`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    return this.http.put(url, body, httpOptions);
  }

  DELETERequest(): Observable<any> {
    let url = `${this.apiRoot}/delete`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    return this.http.delete(url, httpOptions);
  }

  doGETAsObservableError(): Observable<any> {
    let url = `${this.apiRoot}/post`;
    return this.http.get(url).pipe(
      catchError(() => {
        // Error Block
        throw({
          validations: [{
            "email": "email not exists"
          }, {
            "phone": "invalid phone number"
          }]
        });
      }));;
  }

  doGETWithHeaders(): Observable<any> {
    // Adding Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: btoa("username:password")
      })
    };
    let url = `${this.apiRoot}/get`;
    return this.http.get(url, httpOptions);
  }
}
