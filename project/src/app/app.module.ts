import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HoverImageChangeDirective } from './directives/hover-image-change.directive';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AboutMeComponent,
    MyProjectsComponent,
    ContactMeComponent,
    HoverImageChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
