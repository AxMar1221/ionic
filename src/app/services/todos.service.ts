import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  list: List[] = [];

  constructor() {
    this.loadStorage();
  }

  createList( title: string ){
    const newList = new List(title);
    this.list.push( newList );
    this.saveStorage();

    return newList.id;
  }

  getList( id: string |  number ) {
    id = Number(id);
    return this.list.find( listData => listData.id === id );
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.list) );
  }

  loadStorage(){
    if (localStorage.getItem('data')){
      this.list = JSON.parse(localStorage.getItem('data'));
    } else {
      this.list = [];
    }
  }
}
