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
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './child/child.component';
import { OutputComponent } from './output/output.component';
import { ChildComponent as OutputChild } from './output/child/child.component';
import { FilterComponent } from './output/filter/filter.component';
import { NonrelatedComponent } from './nonrelated/nonrelated.component';
import { ChildnamesComponent } from './nonrelated/childnames/childnames.component';
import { SearchComponent } from './nonrelated/search/search.component';
import { TemplatereferencevarComponent } from './templatereferencevar/templatereferencevar.component';
import { RefvarcomponentComponent } from './refvarcomponent/refvarcomponent.component';
import { ChildcomponentComponent } from './refvarcomponent/childcomponent/childcomponent.component';
import { ChilddetailComponent } from './refvarcomponent/childdetail/childdetail.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ViewChildrenCompComponent } from './view-children-comp/view-children-comp.component';
import { NgtemplatecompComponent } from './ngtemplatecomp/ngtemplatecomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavlinksComponent,
    SmallbtnComponent,
    HelptextComponent,
    DatabindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent,
    NgforComponent,
    NgifComponent,
    NgstyleComponent,
    NgclassComponent,
    CommunicationComponent,
    ChildComponent,
    OutputComponent,
    OutputChild,
    FilterComponent,
    NonrelatedComponent,
    ChildnamesComponent,
    SearchComponent,
    TemplatereferencevarComponent,
    RefvarcomponentComponent,
    ChildcomponentComponent,
    ChilddetailComponent,
    ViewchildComponent,
    ViewChildrenCompComponent,
    NgtemplatecompComponent
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
