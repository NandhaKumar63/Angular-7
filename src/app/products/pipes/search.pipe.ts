import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class SearchPipe implements PipeTransform {

    transform(arrayValue: any, searchValue: string = '', searchKey: string) {
        let results = [];
        if (arrayValue) {
            results = arrayValue.filter((item) => {
                return item[searchKey].toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
            });
        }
        return results;
    }

}
