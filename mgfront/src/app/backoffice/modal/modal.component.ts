import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { ApiserviceService } from 'src/app/core/apiservice.service';
import { questions } from '../../core/question.data';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  questions = questions;
  response: any;
  objectKeys = Object.keys;
  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private apiService: ApiserviceService) { }

  ngOnInit() {
    this.apiService.getId('response', this.data).subscribe(dataResponse => {
      console.log('response', dataResponse);
      this.response = dataResponse;
      this.response.question_1 = this.response.question_1 ? 'Nouveau Client' : 'SAV';
    });
  }

}
