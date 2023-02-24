import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate',
  pure: true,
})
export class CreationDatePipe implements PipeTransform {
  transform(date: Date): string {
    if (date) {
      return date
        .toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replace(/\//g, '.');
    } else {
      return '--';
    }
  }
}
