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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ParticleContainerComponent } from './components/particle-container/particle-container.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TesteComponent,
    NavbarComponent,
    ContactComponent,
    ProjectComponent,
    ParticleContainerComponent,
  ],
  imports: [BrowserModule,AppRoutingModule,ReactiveFormsModule,BrowserAnimationsModule,NgbCollapseModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
