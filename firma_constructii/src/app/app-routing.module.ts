import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RrsComponent } from './rrs/rrs.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/rrs',pathMatch:'full'},//redirectionez ruta pt a afisa prezentarea firmei
  {path:'rrs',component:RrsComponent},
  {path:'**',component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RrsComponent,NotFoundComponent]