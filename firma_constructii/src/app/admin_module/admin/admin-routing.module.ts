import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin_components/admin-dashboard/admin-dashboard.component';
import { InformatiiComponent } from '../admin_components/informatii/informatii.component';
import { AcasaComponent } from '../admin_components/acasa/acasa.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent, 
      children:[
          {path:'informatii',component:InformatiiComponent},
          {path:'acasa',component:AcasaComponent},
          {path:'',redirectTo:'/admin/acasa',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
