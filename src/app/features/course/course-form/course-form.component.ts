import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder, FormGroup, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;


  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  ngOnInit() {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      authors: this.fb.array([]),
      duration: ['', [Validators.required, Validators.min(0)]],
      newAuthor: this.fb.group({
        authorName: ['', [Validators.pattern(/^[a-zA-Z0-9]+$/)]]
      })
    });
  }


  get authorControls() {
    return (this.courseForm.get('authors') as FormArray).controls;
  }

  get title() {
    return this.courseForm.get('title');
  }

  get description() {
    return this.courseForm.get('description');
  }

  get duration() {
    return this.courseForm.get('duration');
  }

  get newAuthor() {
    return this.courseForm.get('newAuthor.authorName');
  }

  onAddAuthor() {
    const control = this.fb.control('', [Validators.required]);
    (this.courseForm.get('authors') as FormArray).push(control);
  }

  onSubmit() {
    console.log('submit');
    
  }
}
