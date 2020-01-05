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
  questions : any;
  sliderArray: object[];
  transform: number;
  selectedIndex = 0;
  constructor(private api: ApiserviceService) {
    this.sliderArray = [];
    this.selectedIndex = 0;
    this.transform = 100;
   }

  ngOnInit() {
    // this.getQuestion();
    this.sliderArray = [
            {"img": "assets/backgound-1.png", "alt": "", "text": "365 Days Of weddings a year"},
      {"img": "assets/backgound-1.png", "alt": "", "text": "365 Days Of weddings a year"},
      {"img": "assets/backgound-2.png", "alt": "", "text": "365 Days Of weddings a year"},
      {"img": "assets/backgound-1.png", "alt": "",  "text": "365 Days Of weddings a year"},
      {"img": "assets/backgound-1.png", "alt": "",  "text": "365 Days Of weddings a year"},
      {"img": "assets/backgound-1.png", "alt": "", "text": "365 Days Of weddings a year"}
    ];

  }

  getQuestion(): void {
    this.api.getAll('question')
        .subscribe(questions => {
          this.questions = questions;
          console.log('questions',this.questions);
          
        });
  }
  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
   }

   keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

   downSelected(i) {
   this.transform =  100 - (i) * 50;
     this.selectedIndex = this.selectedIndex + 1;
    //  if (this.selectedIndex > 4) {
    //    this.selectedIndex = 0;
    //  }
   }

}
