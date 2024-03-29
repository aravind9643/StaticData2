import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftNavComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
