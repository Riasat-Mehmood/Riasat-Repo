import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Task1Component } from './task1/task1.component';
import { SidebarComponent } from './task1/sidebar/sidebar.component';
import { IntropageComponent } from './task1/intropage/intropage.component';
import { EducationpageComponent } from './task1/educationpage/educationpage.component';
import { LanguageComponent } from './task1/language/language.component';
import { DatatypesComponent } from './task1/datatypes/datatypes.component';
import { MathoperatersComponent } from './task1/mathoperaters/mathoperaters.component';


@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    SidebarComponent,
    IntropageComponent,
    EducationpageComponent,
    LanguageComponent,
    DatatypesComponent,
    MathoperatersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
