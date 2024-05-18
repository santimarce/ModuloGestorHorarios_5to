import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardteacherComponent } from './views/dashboardteacher/dashboardteacher.component';
import { FormstudentComponent } from './components/formas/formstudent/formstudent.component';
import { IndexComponent } from './views/index/index.component';
import { DashboardstudentComponent } from './views/dashboardstudent/dashboardstudent.component';
import { FormloginComponent } from './components/formas/formlogin/formlogin.component';

const routes: Routes = [
  { path: 'index', component: DashboardteacherComponent },
  { path: 'pruebas', component: FormloginComponent },
  { path: 'formestudiante', component: FormstudentComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: IndexComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
