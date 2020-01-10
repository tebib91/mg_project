import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiserviceService } from '../core/apiservice.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ 'opacity': '1' })),
      state('out', style({ 'opacity': '0' })),
      transition('* => *', [
        animate(2000)
      ])
    ])
  ]

})

export class HomeComponent implements OnInit {
  private bgImgs: Array<any>;
  private current: number = 0;
  currentImage;
  state = 'in';
  counter = 0;
  enableAnimation = false;

  response = {};
  questions: any;
  sliderArray: any[];
  transform: number;
  selectedIndex = 0;
  value: number = 5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: 'Very poor'},
      {value: 2},
      {value: 3, legend: 'Fair'},
      {value: 4},
      {value: 5, legend: 'Average'},
      {value: 6},
      {value: 7, legend: 'Good'},
      {value: 8},
      {value: 9, legend: 'Excellent'}
    ]
  };
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

    ];
    this.currentImage= this.sliderArray[0].img;

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
    if( x === 1) {
      this.currentImage= this.sliderArray[1].img
    } else {
      this.currentImage= this.sliderArray[0].img

    }
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
    console.log(this.full_name)
    console.log(this.car_model)
    console.log(this.full_name)
    this.response['full_name'] = this.full_name;
    this.response['car_model'] = this.car_model;
    this.response['suggestion'] = this.suggestion;
    this.api.addResponse(this.response).subscribe((data) => {
      console.log('response data', data);
    });
  }
}
