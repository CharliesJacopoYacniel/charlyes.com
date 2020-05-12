import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ModalModule } from './modal/modal.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsRoutingModule,

    ModalModule
  ],
  exports: [
    ModalModule
  ]

})
export class ComponentsModule { }
