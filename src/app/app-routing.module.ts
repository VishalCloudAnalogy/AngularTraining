import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogListComponent } from './blog-post/blog-list/blog-list.component';
import { BlogEditComponent } from './blog-post/blog-edit/blog-edit.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'profile', component: ProfileComponent }, 
  { path: 'post-blog', component: BlogPostComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: 'edit-blog', component: BlogEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
