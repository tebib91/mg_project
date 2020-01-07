import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { StatCardComponent } from './stat-card/stat-card.component';


@NgModule({
  declarations: [BackofficeComponent, ModalComponent, StatCardComponent],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    NgxChartsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [ModalComponent]
})
export class BackofficeModule { }
