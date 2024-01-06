import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ProjectComponent } from './modules/project/project.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  {
  path: '', component: HomeComponent
  },
  {
  path: 'contato', component: ContactComponent
  },
  {
  path: 'projetos', component: ProjectComponent
  },
  {
  path: 'sobre', component: AboutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
