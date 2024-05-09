import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MatCardModule } from '@angular/material/card';
import { ComponentsModule } from "../components/components.module";
import { DashboardteacherComponent } from './dashboardteacher/dashboardteacher.component';
import { DashboardstudentComponent } from './dashboardstudent/dashboardstudent.component';


@NgModule({
  declarations: [
    IndexComponent,
    DashboardteacherComponent,
    DashboardstudentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ComponentsModule
  ],
  exports: [IndexComponent],
})
export class ViewsModule { }
