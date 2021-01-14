import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailDetailComponentComponent } from './_Detail/email-detail-component/email-detail-component.component';
import { EmailBoxComponentComponent } from './_EmailBox/email-box-component/email-box-component.component';
import { EmailPreviewComponentComponent } from './_Preview/email-preview-component/email-preview-component.component';

const routes: Routes = [
  { path: 'box', component: EmailBoxComponentComponent },
  { path: 'box/:id', component: EmailPreviewComponentComponent},
  { path: 'box/:id/:id1', component: EmailDetailComponentComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  EmailBoxComponentComponent,
  EmailPreviewComponentComponent,
  EmailDetailComponentComponent,
];
