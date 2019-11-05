import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultByPipe } from "./pipes/mult-by.pipe";
import { ExMarksPipe } from './pipes/ex-marks.pipe';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { AlphabetPipe } from './pipes/alphabet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    AlphabetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
