import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'tslib';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { TesteComponent } from './modules/teste/teste.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ProjectComponent } from './modules/project/project.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TesteComponent,
    NavbarComponent,
    ContactComponent,
    ProjectComponent
  ],
  imports: [BrowserModule,AppRoutingModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
