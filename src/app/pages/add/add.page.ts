import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/models/list-item.model';
import { List } from 'src/app/models/list.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName = '';
  constructor( private todosService: TodosService,
               private router: ActivatedRoute) {
      const listId = this.router.snapshot.paramMap.get('listId');
      this.list = this.todosService.getList( listId );
  }
  ngOnInit() {
  }

  addItem(){
    if ( this.itemName.length === 0 ){
      return;
    }
    const newItem = new ListItem( this.itemName );
    this.list.items.push( newItem );
    this.itemName = '';
    this.todosService.saveStorage();
  }
  changeCheck( item: ListItem ){
    const pendientes = this.list.items
                            .filter( itemData => !itemData.complete )
                            .length;
if ( pendientes === 0 ){
  this.list.doneDay = new Date();
  this.list.done = true;
} else {
  this.list.doneDay = null;
  this.list.done = false;
}
    this.todosService.saveStorage();
  }
  delete( i: number ){
    this.list.items.splice( i, 1 );
    this.todosService.saveStorage();
  }

}
