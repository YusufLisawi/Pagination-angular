import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    ClassDirective,
    TimesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
