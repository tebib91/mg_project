import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [BackofficeComponent],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    NgxChartsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class BackofficeModule { }
