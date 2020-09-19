import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogModule } from './dog-list/dog.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login.component';
import {authInterceptorProviders} from './interceptor/auth-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DogModule,
    AppRoutingModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
