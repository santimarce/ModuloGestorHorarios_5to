import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MatCardModule } from '@angular/material/card';
import { ComponentesModule } from "../components/components.module";
import { DashboardteacherComponent } from './dashboardteacher/dashboardteacher.component';
import { DashboardstudentComponent } from './dashboardstudent/dashboardstudent.component';
import { MatIcon } from '@angular/material/icon';
import { BasicsModule } from '../components/basics/basics.module';


@NgModule({
  declarations: [
    IndexComponent,
    DashboardteacherComponent,
    DashboardstudentComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    MatCardModule,
    MatIcon
  ],
  exports: [
    IndexComponent,
    DashboardstudentComponent,
    DashboardteacherComponent
    
  ],
})
export class ViewsModule { }
