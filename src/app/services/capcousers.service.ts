
import {Users} from './sample_data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CapcousersService {

  constructor() { }

  getUsers(filter?: string,
           query?: string,
           start: number = 0,
           stop?: number): Observable<any[]> {
      const list = query ?
      Users.filter(p => p[(filter || 'name')].toLowerCase().includes(query.toLowerCase())) :
      Users;
      return stop ?
      of(list.slice(start, stop)) :
      of(list.slice(start));
    }

  getColumns(): string[] {
    return ["name", "phone", "email",
      "org_num", "address_1", "city", "zip", "geo",
      "pan", "pin", "status", "fee", "guid", "date_entry",
      "date_exit", "date_first",
      "date_recent", "url", "status", "id"]
  }

  submitPostRequest(id, status): Promise<{ success: boolean }> {
    let option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, status })
    };

    // fetch('/api/submit', options).then().then();

    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve({ success: true }); }, 1500);
    });
  }

}
