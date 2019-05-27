import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component'; 
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'portfolio', component: PortfolioComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'login', component: LoginComponent},
{ path: 'services', component: ServicesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
