import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration.pipe';
import { CreationDatePipe } from './creation-date.pipe';

@NgModule({
  declarations: [DurationPipe, CreationDatePipe],
  imports: [CommonModule],
  exports: [DurationPipe, CreationDatePipe],
})
export class PipesModule {}
