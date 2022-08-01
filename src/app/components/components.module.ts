import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';

@NgModule({
  declarations: [
    ListsComponent
  ],
  exports: [
    ListsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
