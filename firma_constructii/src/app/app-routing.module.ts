import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RrsComponent } from './rrs/rrs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin_module/admin_components/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'/rrs',pathMatch:'full'},//redirectionez ruta pt a afisa prezentarea firmei
  {path:'rrs',component:RrsComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',
      canActivate:[AuthGuard],
      loadChildren:()=>
          import('./admin_module/admin/admin.module').then((m)=>m.AdminModule)},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RrsComponent,LoginComponent,RegisterComponent,AdminDashboardComponent,NotFoundComponent]