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

  // public messages = [{ name: "Question One", value: 0.81, extra: { format: "percent" } }];
  public messages;
  public messagesBgColor = { domain: ["#606060"] };

  // public members = [{ name: "Question One", value: 0.81, extra: { format: "percent" } }];
  public members;
  public membersBgColor = { domain: ["#F47B00"] };
  newClients = {
    percentage: 0,
    number: 0
  };
  savClients = {
    percentage: 0,
    number: 0
  };
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
  };
  type = false;
  constructor(
    private apiService: ApiserviceService,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    console.log('type1', this.type);
    this.apiCall();
    this.apiService.getStat({}).subscribe((nb: any) => {
      console.log('number', nb)
      this.responsesNb = nb.number;
      this.apiService.getStat({question_1: true}).subscribe((newNb: any) => {
        console.log('new number', newNb)
        this.newClients['number'] = newNb.number;
        this.newClients['percentage'] = newNb.number  / this.responsesNb;
        this.members = [{ name: "Nouveaux clients", value: this.newClients.percentage, extra: { format: "percent" } }];
        console.log('new', this.newClients);
      });
      this.apiService.getStat({question_1: false}).subscribe((savNb: any) => {
        console.log('sav number', savNb)
        this.savClients['number'] = savNb.number;
        this.savClients['percentage'] = savNb.number / this.responsesNb;
        console.log('sav', this.savClients);
        this.messages = [{ name: "SAV", value: this.savClients.percentage, extra: { format: "percent" } }];
      });
    })
    // this.apiService.getAll('response').subscribe(responses => {
    //   let index = 1;
    //   responses.map(response => {
    //     response.index = index;
    //     index++;
    //   });
    //   this.repsonses = responses;
    //   this.dataSource = new MatTableDataSource(responses);
    // });
    // this.apiService.getStat('').subscribe((responsesNb: any) => {
    //   this.responsesNb = responsesNb.number;
    // });
  }
  apiCall() {
    this.apiService.filterResponse(this.type).subscribe((responses: any) => {
      let index = 1;
      responses.map(response => {
        response.index = index;
        index++;
      });
      this.repsonses = responses;
      this.dataSource = new MatTableDataSource(responses);
    })
  }
  changeSelect() {
    // do shit
    console.log('value', this.type);
    this.apiCall();
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
