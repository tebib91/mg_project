import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
const ELEMENT_DATA: any = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  public sales = [{ name: 'sales', value: 0.81, extra: { format: 'percent' } }];
  public salesBgColor = { domain: ['#2F3E9E'] };

  public likes = [{ name: 'likes', value: 47588 }];
  public likesBgColor = { domain: ['#D22E2E'] };

  public downloads = [{ name: 'downloads', value: 189730 }];
  public downloadsBgColor = { domain: ['#378D3B'] };

  public profit = [
    { name: 'profit', value: 52470, extra: { format: 'currency' } }
  ];
  public profitBgColor = { domain: ['#0096A6'] };

  public messages = [{ name: 'messages', value: 75296 }];
  public messagesBgColor = { domain: ['#606060'] };

  public members = [{ name: 'members', value: 216279 }];
  public membersBgColor = { domain: ['#F47B00'] };


  constructor() {}
  ngOnInit() {}
  infoValueFormat(c): string {
    switch (c.data.extra ? c.data.extra.format : '') {
      case 'currency':
        return `\$${Math.round(c.value).toLocaleString()}`;
      case 'percent':
        return `${Math.round(c.value * 100)}%`;
      default:
        return c.value.toLocaleString();
    }
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelect(event) {
    console.log(event);
  }
  public infoLabelFormat(c): string {
    switch (c.data.name) {
      case 'sales':
        return `<i class="fa fa-shopping-cart mr-2"></i>${c.label}`;
      case 'likes':
        return `<i class="fa fa-thumbs-o-up mr-2"></i>${c.label}`;
      case 'downloads':
        return `<i class="fa fa-download mr-2"></i>${c.label}`;
      case 'profit':
        return `<i class="fa fa-money mr-2"></i>${c.label}`;
      case 'messages':
        return `<i class="fa fa-comment-o mr-2"></i>${c.label}`;
      case 'members':
        return `<i class="fa fa-user mr-2"></i>${c.label}`;
      default:
        return c.label;
    }
  }

}
