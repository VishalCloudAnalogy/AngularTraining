import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogListComponent } from './blog-post/blog-list/blog-list.component';
import { HeaderComponent } from './header/header.component';
import { BlogEditComponent } from './blog-post/blog-edit/blog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProfileComponent,
    BlogPostComponent,
    BlogListComponent,
    HeaderComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
