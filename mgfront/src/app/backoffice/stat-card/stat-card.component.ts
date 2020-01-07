import { Component, OnInit, Input } from "@angular/core";
import { ApiserviceService } from "src/app/core/apiservice.service";

@Component({
  selector: "app-stat-card",
  templateUrl: "./stat-card.component.html",
  styleUrls: ["./stat-card.component.scss"]
})
export class StatCardComponent implements OnInit {
  @Input() questionNb;
  @Input() responsesNb;
  @Input() bgColor;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#f25555']
  };
  public sales = [{ name: "sales", value: 0.81, extra: { format: "percent" } }];
  result = [];
  questionStats = {};
  loaded = false;
  constructor(private apiService: ApiserviceService) {}

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      this.apiService
        .getStat(`${this.questionNb}/${i}`)
        .subscribe((nb: any) => {
          const stats = {};
          stats[`score_${i}`] = nb.number;
          stats[`percentage_${i}`] = nb.number / this.responsesNb / 100;
          this.questionStats[`question_${this.questionNb}`] = stats;
          this.result.push({
            name: `Score: ${i}`,
            value: nb.number / this.responsesNb / 100,
            extra: { format: "percent" }
          });
          console.log('series', this.result);
        });
    }
    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }
}
