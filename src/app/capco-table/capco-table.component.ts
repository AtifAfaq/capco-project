import { Component, OnInit } from '@angular/core';
import { CapcousersService } from '../services/capcousers.service';

@Component({
  selector: 'app-capco-table',
  templateUrl: './capco-table.component.html',
  styleUrls: ['./capco-table.component.scss']
})
export class CapcoTableComponent implements OnInit {

  constructor(capcousersservices:CapcousersService) { }

  ngOnInit() {
  }

}