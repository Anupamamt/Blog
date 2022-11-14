import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BloggerComponent } from './components/blogger/blogger.component';
import { HomeComponent } from './components/home/home.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { BlogdisplayComponent } from './components/blogdisplay/blogdisplay.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BloggerComponent,
    HomeComponent,
    CommentsComponent,
    FooterComponent,
   BlogdisplayComponent,
        SigninComponent,
        SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
