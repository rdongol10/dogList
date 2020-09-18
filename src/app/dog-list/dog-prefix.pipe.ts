import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dogPrefix'
})
export class DogPrefixPipe implements PipeTransform {

  transform(value: string , prefix:string): string {
    return value.concat(prefix)
  }

}
