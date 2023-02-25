import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"

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
        canLoad: [AuthorizedGuard],
        loadChildren: () => import('./features/courses/courses.module')
            .then(m => m.CoursesModule)
    },
    {path: '**', redirectTo: '/courses'},
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