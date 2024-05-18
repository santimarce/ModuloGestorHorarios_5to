import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { FormloginComponent } from './components/forms/formlogin/formlogin.component';
import { FormregisterComponent } from './components/forms/formregister/formregister.component';
import { DashboardteacherComponent } from './views/dashboardteacher/dashboardteacher.component';
import { FormestudiantesinComponent } from './components/forms/formestudiantesin/formestudiantesin.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'pruebas', component: DashboardteacherComponent },
  { path: 'formestudiante', component: FormestudiantesinComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
