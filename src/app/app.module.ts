import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesModule } from './features/courses/courses.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './features/course/course.component';
import { RegistrationFormComponent } from './features/registration';
import { LoginFormComponent } from './features/login';
import { AppRoutingModule } from './app-routing.module';
import { CourseModule } from './features/course';

@NgModule({
  declarations: [
    AppComponent,
    // CourseComponent,
    RegistrationFormComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CourseModule,
    CoursesModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
