import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public todosService: TodosService,
               private router: Router,
               private alertCtrl: AlertController) {}

  async addList(){
    // this.router.navigateByUrl('/tabs/tab1/add');
    const alert = await this.alertCtrl.create({
      header: 'New list',
      inputs:[
        {
          name: 'title',
          type: 'text',
          placeholder: 'name of the list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: ()=>{
            console.log('Cancel');
          }
        },
        {
          text: 'Create',
          handler: ( data )=>{
            console.log( data);
            if ( data.title.length === 0 ){
              return;
            }
            const listId = this.todosService.createList( data.title );
            this.router.navigateByUrl(`/tabs/tab1/add/${ listId }`);
          }
        }
      ]
    });
    alert.present();
  }

}
