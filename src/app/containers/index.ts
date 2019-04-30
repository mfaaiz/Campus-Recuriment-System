import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { StudentComponent } from './student/student.component';
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