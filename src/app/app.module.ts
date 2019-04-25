import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import{MatFormFieldModule,MatIconModule,MatInputModule,MatListModule,MatButtonModule, MatSidenavModule, MatToolbarModule} from '@angular/material' ;
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AboutComponent } from './components/about/about.component';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { CompanyMainComponent } from './components/company-main/company-main.component';
import { HomeComponent } from './components/home/home.component';
import { JobViewComponent } from './components/job-view/job-view.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { ParentComponent } from './components/parent/parent.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { StudentMainComponent } from './components/student-main/student-main.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { AdminComponent } from './containers/admin/admin.component';
import { CompanyComponent } from './containers/company/company.component';
import { StudentComponent } from './containers/student/student.component';
import { RootComponent } from './containers/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    AboutComponent,
    AdminInfoComponent,
    AdminMainComponent,
    CompanyDetailComponent,
    CompanyInfoComponent,
    CompanyMainComponent,
    HomeComponent,
    JobViewComponent,
    ListJobsComponent,
    ParentComponent,
    PostJobComponent,
    ProtectedComponent,
    StudentDetailComponent,
    StudentInfoComponent,
    StudentMainComponent,
    UserListComponent,
    UserViewComponent,
    AdminComponent,
    CompanyComponent,
    StudentComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    //BrowserAnimation,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    MatRadioModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,AngularFirestoreModule.enablePersistence()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
