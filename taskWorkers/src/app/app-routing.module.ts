import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkersComponent } from './components/workers/workers.component';
import { AddFormComponent } from './components/add-form/add-form.component';


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "workers", component: WorkersComponent},
  {path: "addWorker", component: AddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
