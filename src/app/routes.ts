import { Routes } from '@angular/router';
import {LoggedInGuard} from './providers/Loggedin-guard';

import {  
    AdminComponent,
    CompanyComponent,
    StudentComponent,
    RootComponent,
    LoginComponent,
    SignupComponent
} from "./containers";

import {     
    HomeComponent, 
    AboutComponent,
    ProtectedComponent,
    ParentComponent,
    StudentDetailComponent,
    PostJobComponent,
    ListJobsComponent,
    UserListComponent,
    JobViewComponent,
    UserViewComponent,
} from "./components";

export const AppRoutes: Routes = [
    {path: '', redirectTo:'/signin',pathMatch:'full'},
    {path:'signup', component: SignupComponent},
    {path:'login', component: LoginComponent},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    
    {path:'contactus', redirectTo: 'contact'},
    {path:'protected', component: ProtectedComponent,
    canActivate: [LoggedInGuard]},
    {path:'parent', component: ParentComponent},
    
    {path:'root', component: RootComponent, 
        canActivate: [LoggedInGuard],
        children: [
            {path:'admin', component: AdminComponent,
                        children: [
                            {path:'list-jobs', component: ListJobsComponent},
                            {path:'student-list', component: UserListComponent},
                            {path:'company-list', component: UserListComponent},
                            {path:'jobDetail', component: JobViewComponent},
                            {path:'userDetail', component: UserViewComponent}
                        ]},
            {path:'company', component: CompanyComponent,
                        children: [
                            {path:'post-job', component: PostJobComponent},
                            {path:'list-jobs', component: ListJobsComponent},
                            {path:'student-list', component: UserListComponent},
                            {path:'userDetail', component: UserViewComponent}
                        ]},
            {path:'student', component: StudentComponent,
                        children: [
                            {path:'student-detail', component: StudentDetailComponent},
                            {path:'company-list', component: UserListComponent},
                            {path:'list-jobs', component: ListJobsComponent},
                            {path:'jobDetail', component: JobViewComponent},
                            {path:'userDetail', component: UserViewComponent}
                        ]},
        ]
    },
];