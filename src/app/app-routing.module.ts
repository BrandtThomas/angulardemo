import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauNotesComponent } from './tableau-notes/tableau-notes.component';

const routes: Routes = [
  { path:'home', component: TableauNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
