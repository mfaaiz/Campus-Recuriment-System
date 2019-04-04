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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent
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
    MatRadioModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
