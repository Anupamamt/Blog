import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdisplayComponent } from './components/blogdisplay/blogdisplay.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [{path:'',component:HomeComponent,children:[{path:'aboutMaths',component:BlogdisplayComponent,children:[{path:'comments',component:CommentsComponent}]}]},{path:'signin',component:SigninComponent},{path:'signup',component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
