import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ApiserviceService } from "../core/apiservice.service";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "./modal/modal.component";
@Component({
  selector: "app-backoffice",
  templateUrl: "./backoffice.component.html",
  styleUrls: ["./backoffice.component.scss"]
})
export class BackofficeComponent implements OnInit {
  displayedColumns: string[] = [
    "index",
    "question_1",
    "full_name",
    "car_model"
  ];
  dataSource: MatTableDataSource<any>;
  repsonses: any;
  public sales = [{ name: "Question One", value: 0.81, extra: { format: "percent" } }];
  public salesBgColor = { domain: ["#2F3E9E"] };

  public likes = [{ name: "Question One", value: 0.81, extra: { format: "percent" } }];
  public likesBgColor = { domain: ["#D22E2E"] };

  public downloads = [{ name: "Question One", value: 0.81, extra: { format: "percent" } }];
  public downloadsBgColor = { domain: ["#378D3B"] };

  public profit = [{ name: "Question One", value: 0.81, extra: { format: "percent" } }];
  public profitBgColor = { domain: ["#0096A6"] };

  public messages = [{ name: "Question One", value: 0.81, extra: { format: "percent" } }];
  public messagesBgColor = { domain: ["#606060"] };

  public members = [{ name: "Question One", value: 0.81, extra: { format: "percent" } }];
  public membersBgColor = { domain: ["#F47B00"] };

  questions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  responsesNb: number;
  stats = {
    question_1: {},
    question_2: {},
    question_3: {},
    question_4: {},
    question_5: {},
    question_6: {},
    question_7: {},
    question_8: {},
    question_9: {},
    question_10: {},
    question_11: {},
    question_12: {},
    question_13: {},
  }
  constructor(
    private apiService: ApiserviceService,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.apiService.getAll('response').subscribe(responses => {
      let index = 1;
      responses.map(response => {
        response.index = index;
        index++;
      });
      this.repsonses = responses;
      this.dataSource = new MatTableDataSource(responses);
    });
    this.apiService.getStat('').subscribe((responsesNb: any) => {
      this.responsesNb = responsesNb.number;
    });
  }
  infoValueFormat(c): string {
    switch (c.data.extra ? c.data.extra.format : "") {
      case "currency":
        return `\$${Math.round(c.value).toLocaleString()}`;
      case "percent":
        return `${Math.round(c.value * 100)}%`;
      default:
        return c.value.toLocaleString();
    }
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onSelectRow(id) {
    console.log(id);
    const dialogRef = this.dialog.open(ModalComponent, {
      // height: '400px',
      // width: '600px',
      data: id
    });
  }
  onSelect(event) {
    console.log(event);
  }
  public infoLabelFormat(c): string {
    switch (c.data.name) {
      case "sales":
        return `<i class="fa fa-shopping-cart mr-2"></i>${c.label}`;
      case "likes":
        return `<i class="fa fa-thumbs-o-up mr-2"></i>${c.label}`;
      case "downloads":
        return `<i class="fa fa-download mr-2"></i>${c.label}`;
      case "profit":
        return `<i class="fa fa-money mr-2"></i>${c.label}`;
      case "messages":
        return `<i class="fa fa-comment-o mr-2"></i>${c.label}`;
      case "members":
        return `<i class="fa fa-user mr-2"></i>${c.label}`;
      default:
        return c.label;
    }
  }
}
