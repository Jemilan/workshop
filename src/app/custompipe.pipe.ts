import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any,letter:string): any {
    return value.filter(val=>val.title.includes(letter));
  }

}
