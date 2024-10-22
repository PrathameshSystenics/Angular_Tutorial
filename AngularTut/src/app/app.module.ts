import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { NavlinksComponent } from './Header/navlinks/navlinks.component';
import { SmallbtnComponent } from './Header/smallbtn/smallbtn.component';
import { HelptextComponent } from './Header/helptext/helptext.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavlinksComponent,
    SmallbtnComponent,
    HelptextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
