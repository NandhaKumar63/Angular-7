import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class SearchPipe implements PipeTransform {

    transform(arrayValue: any, searchValue: string = '') {
        let results = [];
        if (arrayValue) {
            results = arrayValue.filter((item) => {
                return item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
            });
        }
        return results;
    }

}
