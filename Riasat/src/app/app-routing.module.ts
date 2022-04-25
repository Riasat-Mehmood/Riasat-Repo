import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatatypesComponent } from './task1/datatypes/datatypes.component';
import { EducationpageComponent } from './task1/educationpage/educationpage.component';
import { LanguageComponent } from './task1/language/language.component';
import { MathoperatersComponent } from './task1/mathoperaters/mathoperaters.component';
import { SidebarComponent } from './task1/sidebar/sidebar.component';
import { Task1Component } from './task1/task1.component';

const routes: Routes = [
  {
    path:'',
    component:Task1Component
  },
  {
    path: 'task',
    component: Task1Component
  },

  {
    path: 'education',
    component: EducationpageComponent
  },

  {
    path: 'language',
    component: LanguageComponent
  },
  {
path: 'datatypes',
component: DatatypesComponent
    }  ,
{
  path:'mathoperaters',
  component: MathoperatersComponent
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
