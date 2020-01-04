import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../core/apiservice.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  questions : any;
  counter = 0;
  constructor(private api: ApiserviceService) { }

  ngOnInit() {
    this.getQuestion();
  }
  showNext() {
    if (this.counter < this.questions.length -1) {
      this.counter += 1;
    }
  }
  getQuestion(): void {
    this.api.getAll('question')
        .subscribe(questions => {
          this.questions = questions;
          console.log('questions', this.questions);
          
        });
  }
}
