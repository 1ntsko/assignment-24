import { ActiveDirective } from './directives/active.directive';
import { AgePipe } from './pipes/Age.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { HighlightDirective } from './directives/highlight.directive';
import { Task2Component } from './task2/task2.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    HighlightDirective,
    AgePipe,
    ActiveDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
