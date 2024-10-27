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
import { NgcontainercompComponent } from './ngcontainercomp/ngcontainercomp.component';
import { NgcontentcompComponent } from './ngcontentcomp/ngcontentcomp.component';
import { ChildcontentComponent } from './ngcontentcomp/childcontent/childcontent.component';
import { ContentchildcompComponent } from './contentchildcomp/contentchildcomp.component';
import { ChildtutorialComponent } from './contentchildcomp/childtutorial/childtutorial.component';
import { ContentchildrenComponent } from './contentchildren/contentchildren.component';
import { ChildchildrenComponent } from './contentchildren/childchildren/childchildren.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { NgonchangesComponent } from './lifecyclehooks/ngonchanges/ngonchanges.component';
import { MessagecomponentComponent } from './lifecyclehooks/ngonchanges/messagecomponent/messagecomponent.component';
import { NgaftercontentinitComponent } from './lifecyclehooks/ngaftercontentinit/ngaftercontentinit.component';
import { ChildcontentComponent as ChildContentNg } from './lifecyclehooks/ngaftercontentinit/childcontent/childcontent.component';
import { NgondestoryComponent } from './lifecyclehooks/ngondestory/ngondestory.component';
import { ChilddestroyComponent } from './lifecyclehooks/ngondestory/childdestroy/childdestroy.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { HostlistenerDirective } from './customdirective/hostlistener.directive';
import { HostbindingDirective } from './customdirective/hostbinding.directive';

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
    NgtemplatecompComponent,
    NgcontainercompComponent,
    NgcontentcompComponent,
    ChildcontentComponent,
    ContentchildcompComponent,
    ChildtutorialComponent,
    ContentchildrenComponent,
    ChildchildrenComponent,
    LifecyclehooksComponent,
    NgonchangesComponent,
    MessagecomponentComponent,
    NgaftercontentinitComponent,
    ChildContentNg,
    NgondestoryComponent,
    ChilddestroyComponent,
    CustomdirectiveDirective,
    CustomdirectiveComponent,
    HostlistenerDirective,
    HostbindingDirective
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
