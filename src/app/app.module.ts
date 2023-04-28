import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauNotesComponent } from './tableau-notes/tableau-notes.component';
import { ColorNoteDirective } from './color-note.directive';
import { ColornotedemoDirective } from './colornotedemo.directive';

import { IconModule } from '@visurel/iconify-angular';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    TableauNotesComponent,
    ColorNoteDirective,
    ColornotedemoDirective,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
