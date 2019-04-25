import { AdminComponent } from './admin/admin.Component';
import { CompanyComponent } from './company/company.Component';
import { StudentComponent } from './student/student.Component';
import { RootComponent } from './root/root.component';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';

//import { RootComponent } from './root/root.Component';

export const Components: any[] = [
    LoginComponent,
    SignupComponent,
    AdminComponent,
    CompanyComponent,
    StudentComponent,
    RootComponent
    
]

export {
   SignupComponent,
   LoginComponent,
   AdminComponent,
   CompanyComponent,
   StudentComponent,
   RootComponent
}