import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './libs/nav-bar/nav-bar.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './libs/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExperienceCardComponent } from './libs/experience-card/experience-card.component';
import { NgOptimizedImage } from '@angular/common';
import {provideImgixLoader} from '@angular/common';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactMeComponent,
    HomeComponent,
    FooterComponent,
    AboutMeComponent,
    ExperienceCardComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [ provideImgixLoader("https://parhamdev.imgix.net/") ],
  bootstrap: [AppComponent]
})
export class AppModule { }
