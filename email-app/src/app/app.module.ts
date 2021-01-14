import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { EmailBoxComponentComponent } from './_EmailBox/email-box-component/email-box-component.component';
// import { EmailPreviewComponentComponent } from './_Preview/email-preview-component/email-preview-component.component';
// import { EmailDetailComponentComponent } from './_Detail/email-detail-component/email-detail-component.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // EmailBoxComponentComponent,
    // EmailPreviewComponentComponent,
    // EmailDetailComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
