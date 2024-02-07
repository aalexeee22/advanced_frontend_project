import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalaComponent } from './pagina-principala/pagina-principala.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin_module/admin_components/admin-dashboard/admin-dashboard.component';
import { InformatiiComponent } from './admin_module/admin_components/informatii/informatii.component';
import { AcasaComponent } from './admin_module/admin_components/acasa/acasa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AuthComponent } from './services/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PaginaPrincipalaComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    InformatiiComponent,
    AcasaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
