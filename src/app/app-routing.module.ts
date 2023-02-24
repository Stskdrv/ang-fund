import { CoursesComponent } from './features/courses/courses.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./features/login";
import { CourseFormComponent } from './features/course';
import { CourseCardComponent } from './features/courses';

const routes: Routes = [
    {
        path: 'login', loadChildren: () => import('./features/login/login.module')
            .then(m => m.LoginRoutingModule)
    },
    {
        path: 'registration', loadChildren: () => import('./features/registration/registration.module')
            .then(m => m.RegistrationRoutingModule)
    },
    {
        path: 'courses', loadChildren: () => import('./features/courses/courses.module')
            .then(m => m.CoursesModule)
    },
    // {path: '**', redirectTo: '/courses'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {

}