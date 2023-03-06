import { LoginComponent } from './features/login/login.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from './shared/shared.module';
import { AuthorizedGuard } from './core/auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './core/auth/guards/not-authorized.guard';
import { LoginRoutingModule } from './features/login';

const routes: Routes = [
    {
        path: 'login',
        canActivate: [NotAuthorizedGuard],
        loadChildren: () => import('./features/login/login.module')
            .then(m => m.LoginRoutingModule)
    },
    {
        path: 'registration',
        canActivate: [NotAuthorizedGuard],
        loadChildren: () => import('./features/registration/registration.module')
            .then(m => m.RegistrationRoutingModule)
    },
    {
        path: 'courses',
        canActivate: [AuthorizedGuard],
        loadChildren: () => import('./features/courses/courses.module')
            .then(m => m.CoursesModule)
    },
    {path: '**', redirectTo: '/courses'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {

}