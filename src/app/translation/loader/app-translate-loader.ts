import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AppTranslateLoader implements TranslateLoader {

    constructor(private httpClient: HttpClient) {

    }

    getTranslation(lang: string): Observable<any> {
        return this.httpClient.get('assets/translation/en-us.json').pipe(
            map((data) => data),
            catchError(this.handleTranslationError));
    }

    handleTranslationError(error: any) {
        return Observable.throw(error);
    }
}