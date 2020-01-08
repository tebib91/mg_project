import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiserviceService } from '../core/apiservice.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Native

})
export class HomeComponent implements OnInit {
  response = {};
  questions: any;
  sliderArray: object[];
  transform: number;
  selectedIndex = 0;
  value = 1;
  full_name = '';
  car_model = '';
  suggestion = '';
  constructor(private api: ApiserviceService) {
    this.sliderArray = [];
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {
    // this.getQuestion();
    this.sliderArray = [
      { "img": "assets/backgound-1.png", "alt": "", "text": "365 Days Of weddings a year" },
      { "img": "assets/backgound-2.png", "alt": "", "text": "365 Days Of weddings a year" },
      { "img": "assets/backgound-1.png", "alt": "", "text": "365 Days Of weddings a year" },
      { "img": "assets/backgound-1.png", "alt": "", "text": "365 Days Of weddings a year" },
      { "img": "assets/backgound-1.png", "alt": "", "text": "365 Days Of weddings a year" }
    ];

  }

  getQuestion(): void {
    this.api.getAll('question')
      .subscribe(questions => {
        this.questions = questions;
        console.log('questions', this.questions);

      });
  }
  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
    console.log('selectedIndex', this.selectedIndex, 'x: ', x);

  }

  downSelected(i) {
    this.transform = 100 - (i) * 50;
    this.selectedIndex = this.selectedIndex + 1;
    //  if (this.selectedIndex > 4) {
    //    this.selectedIndex = 0;
    //  }
  }
  addResponse(question, payload) {
    this.response[`question_${question}`] = payload;
    if (question == 1 && payload === true) {
      this.selected(2);
    } else if (question == 1 && payload === false) {
      this.selected(5);
    }
    console.log(this.selectedIndex);
  }

  submitResponse() {
    this.response['full_name'] = this.full_name;
    this.response['car_model'] = this.car_model;
    this.response['suggestion'] = this.suggestion;
    this.api.addResponse(this.response).subscribe((data) => {
      console.log('response data', data);
    });
  }
}
