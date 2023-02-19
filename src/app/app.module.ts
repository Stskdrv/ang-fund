import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesModule } from './features/courses/courses.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './features/course/course.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { RegistrationFormComponent } from './features/registration';
import { LoginFormComponent } from './features/login';

@NgModule({
  declarations: [AppComponent, CourseComponent, RegistrationFormComponent, LoginFormComponent],
  imports: [
    BrowserModule,
    SharedModule,
    CoursesModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
