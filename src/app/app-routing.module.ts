import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CollectionComponent} from "./components/collection/collection.component";
import {AuthGuard} from "../shared/guadrs/auth.guard";
import {LoginGuard} from "../shared/guadrs/login.guard";
import {HandbookComponent} from "./components/handbook/handbook.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'main', component: CollectionComponent, canActivate: [AuthGuard] },
  { path: 'handbook', component: HandbookComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
