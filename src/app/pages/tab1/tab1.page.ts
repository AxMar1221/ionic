import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public todosService: TodosService,
               private router: Router) {}

  addList(){
    this.router.navigateByUrl('/tabs/tab1/add');
  }

}
