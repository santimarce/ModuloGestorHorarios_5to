import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsModule } from './basics/basics.module';
import { PopupModule } from './popup/popup.module';
import { FormasModule } from './forms/forms.module';

@NgModule({
  declarations: [],
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
export class ComponentsModule { }
