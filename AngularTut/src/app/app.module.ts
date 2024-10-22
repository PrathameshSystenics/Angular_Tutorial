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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavlinksComponent,
    SmallbtnComponent,
    HelptextComponent,
    DatabindingComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
