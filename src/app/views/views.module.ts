import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MatCardModule } from '@angular/material/card';
import { ComponentsModule } from "../components/components.module";
import { DashboardteacherComponent } from './dashboardteacher/dashboardteacher.component';
import { DashboardstudentComponent } from './dashboardstudent/dashboardstudent.component';
import { MatIcon } from '@angular/material/icon';



@NgModule({
  declarations: [
    IndexComponent,
    DashboardteacherComponent,
    DashboardstudentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon
  ],
  exports: [IndexComponent],
})
export class ViewsModule { }
