import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {

  @Input() done = true;

  constructor( public todosService: TodosService,
               public router: Router) {}

  selectedList( list: List ) {
    if ( this.done ){
      this.router.navigateByUrl(`/tabs/tab2/add/${ list.id }`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${ list.id }`);
    }
  }

  deleteList( list: List ) {
    this.todosService.deleteList( list );
  }
}
