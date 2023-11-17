import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ProjectComponent } from './modules/project/project.component';

const routes: Routes = [
  {
  path: '', component: HomeComponent
  },
  {
  path: 'portifolioGuilherme/contato', component: ContactComponent
  },
  {
  path: 'portifolioGuilherme/projetos', component: ProjectComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
