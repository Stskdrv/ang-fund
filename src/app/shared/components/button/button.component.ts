import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() iconName: any = '';
  @Input() disabled: boolean = false;

  hover = false;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
