import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformName'
})
export class TransformNamePipe implements PipeTransform {

  transform(name: string, lastName: string, ...args: unknown[]): string {
    return `${name} ${lastName}`;
  }

}
