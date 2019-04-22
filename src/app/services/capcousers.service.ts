import { Injectable } from '@angular/core';
import {Users} from './sample_data';

@Injectable({
  providedIn: 'root'
})
export class CapcousersService {

  constructor() { }

  getUsers(){
    return Users;
  }

  getColumns(): string[] {
    return ["name", "phone", "email",
      "org_num", "address_1", "city", "zip", "geo",
      "pan", "pin", "status", "fee", "guid", "date_entry",
      "date_exit", "date_first",
      "date_recent", "url", "status", "id"]
  }
}
