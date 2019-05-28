import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyserviceService } from './myservice.service';
import { ServicesComponent } from './services/services.component';
import { NgSwitchCase, NgSwitch } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ServicedetailComponent } from './servicedetail/servicedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    BlogSingleComponent,
    ContactComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    LoginComponent,
    ServicedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyserviceService, NgSwitchCase, NgSwitch],
  bootstrap: [AppComponent]
})
export class AppModule { }
