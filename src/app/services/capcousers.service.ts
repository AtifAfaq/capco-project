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
}
