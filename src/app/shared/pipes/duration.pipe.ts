import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  pure: true,
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} hours`;
  }
}