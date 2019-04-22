import { Component, OnInit } from '@angular/core';
import { CapcousersService } from '../services/capcousers.service';

@Component({
  selector: 'app-capco-table',
  templateUrl: './capco-table.component.html',
  styleUrls: ['./capco-table.component.scss']
})
export class CapcoTableComponent implements OnInit {
  users;
  columns;
  constructor(private capcousersservices:CapcousersService) { }

  ngOnInit() {
    this.users = this.capcousersservices.getUsers();
    this.columns = this.capcousersservices.getColumns();
  }


}
