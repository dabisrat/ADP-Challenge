import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(collection: any[], args: number): any {
    if (collection && args) {
      return collection.slice(0, args);
    }
    return collection;
  }

}
