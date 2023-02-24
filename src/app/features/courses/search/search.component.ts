import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() placeholder!: string;
  @Output() search = new EventEmitter<string>();

  public searchQuery: string = '';

  public onSubmit(): void {
    this.search.emit(this.searchQuery);
  }
}
