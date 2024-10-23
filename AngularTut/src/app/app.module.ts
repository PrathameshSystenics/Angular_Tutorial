import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { NavlinksComponent } from './Header/navlinks/navlinks.component';
import { SmallbtnComponent } from './Header/smallbtn/smallbtn.component';
import { HelptextComponent } from './Header/helptext/helptext.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavlinksComponent,
    SmallbtnComponent,
    HelptextComponent,
    DatabindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Defining any import are there in the project
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
