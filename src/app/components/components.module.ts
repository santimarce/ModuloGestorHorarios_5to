import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsModule } from './basics/basics.module';
import { PopupModule } from './popup/popup.module';
import { FormasModule } from './formas/formas.module';


@NgModule({
  imports: [
    CommonModule,
    BasicsModule,
    PopupModule,
    FormasModule
  ],
  exports: [
    BasicsModule,
    PopupModule,
    FormasModule
  ]
})
export class ComponentesModule { }
