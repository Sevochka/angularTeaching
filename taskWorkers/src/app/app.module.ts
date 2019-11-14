import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersComponent } from './components/workers/workers.component';
import { WorkerComponent } from './components/worker/worker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { HomeComponent } from './components/home/home.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    WorkerComponent,
    NavbarComponent,
    AddFormComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
