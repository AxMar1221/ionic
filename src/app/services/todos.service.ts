import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  list: List[] = [];

  constructor() {

    const list1 = new List('1');
    const list2 = new List('2');

    this.list.push( list1, list2 );

  }
}
