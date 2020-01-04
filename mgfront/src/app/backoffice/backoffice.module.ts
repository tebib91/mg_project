import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BackofficeComponent],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    NgxChartsModule
  ]
})
export class BackofficeModule { }
