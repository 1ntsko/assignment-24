import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Age',
})
export class AgePipe implements PipeTransform {
  transform(value: number): number {
    return new Date().getFullYear() - value;
  }
}
