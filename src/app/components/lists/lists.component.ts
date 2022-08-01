import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { TodosService } from 'src/app/services/todos.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {

  @ViewChild( IonList ) list: IonList;
  @Input() done = true;

  constructor( public todosService: TodosService,
               public router: Router,
               private alertCtrl: AlertController) {}

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

  async editList( list: List ) {

      const alert = await this.alertCtrl.create({
        header: 'New list',
        inputs:[
          {
            name: 'title',
            type: 'text',
            value: list.title,
            placeholder: 'name of the list'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: ()=>{
              console.log('Cancel');
              this.list.closeSlidingItems();
            }
          },
          {
            text: 'Update',
            handler: ( data )=>{
              console.log( data);
              if ( data.title.length === 0 ){
                return;
              }
              list.title = data.title;
              this.todosService.saveStorage();
              this.list.closeSlidingItems();
            }
          }
        ]
      });
      alert.present();
  }
}
