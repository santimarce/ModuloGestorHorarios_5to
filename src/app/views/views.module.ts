import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MatCardModule } from '@angular/material/card';
import { ComponentsModule } from "../components/components.module";


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ComponentsModule
  ],
  exports: [IndexComponent],
})
export class ViewsModule { }
