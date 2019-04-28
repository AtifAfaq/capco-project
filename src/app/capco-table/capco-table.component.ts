import { Component, OnInit } from '@angular/core';
import { CapcousersService } from '../services/capcousers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-capco-table',
  templateUrl: './capco-table.component.html',
  styleUrls: ['./capco-table.component.scss']
})
export class CapcoTableComponent implements OnInit {

  public users: Observable<any[]>;
  public filter: string;
  public query = '';
  public columns: string[];

  startIndex = 0;
  page = 1;
  pages: number;
  limit: number;
  resultsLimits = [
    10,
    20,
    50
  ];
  constructor(private capcousersservices: CapcousersService) { }

  ngOnInit() {
    this.limit = this.resultsLimits[0];
    this.users = this.capcousersservices.getUsers();
    this.columns = this.capcousersservices.getColumns();
    this.capcousersservices.getUsers().subscribe(list => {
      this.pages = list.length / this.limit;
      console.log(list);
    });
  }

  onFilterChange(event) {
    this.filter = event.target.value;
    this.query = '';
    this.users = this.capcousersservices.getUsers();
  }

  updateFilterResults() {
    console.log(this.query);
    this.users = this.capcousersservices.getUsers(this.filter, this.query, this.startIndex);
  }

  onLimitChanged(newLimit) {
    this.limit = +newLimit;
    this.startIndex = 0;
    this.page = 1;
    this.users = this.capcousersservices.getUsers();
    this.capcousersservices.getUsers(this.filter, this.query, this.startIndex).subscribe(list => {
      this.pages = list.length / this.limit;
    });
  }

  onPage(pageNumber: number): void {
    this.page = pageNumber;
    this.startIndex = (pageNumber * this.limit) - this.limit;
    this.users = this.capcousersservices.getUsers();
  }

  onPrev(): void {
    if (this.page === 1) { return; }
    this.page = this.page - 1;
    this.startIndex = this.startIndex - this.limit;
    this.users = this.capcousersservices.getUsers();
    // this.atService.getUsers(this.filter, this.query, this.startIndex, (this.startIndex - this.limit))
    // .subscribe(list => {
    //   console.log(this, list);
    // })
  }
  onNext(next: boolean): void {
    if (this.page === this.pages) { return; }
    this.page = this.page + 1;
    this.startIndex = this.startIndex + this.limit;
    this.users = this.capcousersservices.getUsers();
    // this.atService.getUsers(this.filter, this.query, this.startIndex, (this.startIndex + this.limit))
    // .subscribe(list => {
    //   console.log(this, list);
    // })
  }

  //onSubmitStatus(users) {
  // this.capcousersservices.submitPostRequest(users.id, users.status)
  // .then(resp => {
  //  console.log(resp);
  // users.status = 'Read';
  //  alert('Successful!');
  // })
}



