import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonePipe } from './phone.pipe';

import { JwPaginationComponent } from 'jw-angular-pagination';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhonePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // JwPaginationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
