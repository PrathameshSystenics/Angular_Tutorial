import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/homecomponent/homecomponent.component';
import { StartedComponent } from './Pages/started/started.component';
import { DirectiveComponent } from './Pages/directive/directive.component';
import { BindingComponent } from './Pages/binding/binding.component';
import { ReferenceVarComponent } from './Pages/reference-var/reference-var.component';
import { DecoratortemplateComponent } from './Pages/decoratortemplate/decoratortemplate.component';
import { HooksComponent } from './Pages/hooks/hooks.component';
import { ConceptsComponent } from './Pages/concepts/concepts.component';
import { ServicesdependencyComponent } from './Pages/servicesdependency/servicesdependency.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { RouterTutComponent } from './Pages/router-tut/router-tut.component';
import { RouteParamComponent } from './route-param/route-param.component';
import { QueryStringComponent } from './query-string/query-string.component';
import { FragmentComponent } from './fragment/fragment.component';
import { RouteguardComponent } from './Pages/routeguard/routeguard.component';
import { ProtectedRoutesComponent } from './Pages/protected-routes/protected-routes.component';
// importing the function of inactivate
import {
  CanActivate,
  CanActivateChild,
  CanDeactivateGuard,
} from './Services/auth.guard';
import { Proteroute1Component } from './Pages/protected-routes/proteroute1/proteroute1.component';
import { Proteroute2Component } from './Pages/protected-routes/proteroute2/proteroute2.component';
import { CandeactivateformComponent } from './candeactivateform/candeactivateform.component';

// Defining the routes
const routes: Routes = [
  // Order of the path must be the same
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'getstarted', component: StartedComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'referencevar', component: ReferenceVarComponent },
  { path: 'deco&temp', component: DecoratortemplateComponent },
  { path: 'hooks', component: HooksComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'services-dependency', component: ServicesdependencyComponent },
  {
    path: 'routes',
    // defining the children routes of the route path
    children: [
      {
        path: '',
        component: RouterTutComponent,
      },
      {
        path: 'routeparam/:index',
        component: RouteParamComponent,
      },
      { path: 'querystring', component: QueryStringComponent },
      { path: 'fragments', component: FragmentComponent },
    ],
  },
  // applying the deactivate route guard
  {
    path: 'guard',
    component: RouteguardComponent,
  },
  // defining the canactivate route guard in the routes only
  {
    path: 'canactivate',
    component: ProtectedRoutesComponent,
    // you can define the arrow function over here but these is the best approach to apply the route guard.
    canActivate: [CanActivate],
    children: [
      { path: 'route1', component: Proteroute1Component },
      {
        path: 'route2',
        component: Proteroute2Component,
      },
    ],
  },
  // these route is for the children routing
  {
    path: 'canactivatechild',
    component: ProtectedRoutesComponent,
    // specifying the array of canactivate child
    canActivateChild: [CanActivateChild],
    children: [
      { path: 'route1', component: Proteroute1Component },
      {
        path: 'route2',
        component: Proteroute2Component,
      },
    ],
  },
  // path for deactivate route guard
  {
    path: 'deactivate',
    component: CandeactivateformComponent,
    // using the candeactivate route guard in the router
    canDeactivate: [CanDeactivateGuard],
  },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering the routers array
  exports: [RouterModule], // exporting the router module.
})
export class AppRoutingModule {}
