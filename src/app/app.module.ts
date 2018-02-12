import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from 'app/services/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot ([
      { path: 'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent, canActivate: [EnsureAuthenticated]},
      { path: 'logout', component: LogoutComponent, canActivate: [EnsureAuthenticated]}
    ])
  ],
  providers: [AuthService, EnsureAuthenticated],
  bootstrap: [AppComponent]
})
export class AppModule { }
