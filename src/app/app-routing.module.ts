import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./Guards/auth.guard";

const routes: Routes = [
  { path: '', loadChildren: '../app/login/login.module#LoginModule' },
  { path: 'client', canActivate: [AuthGuard], loadChildren: '../app/client/client.module#ClientModule' },
  { path: 'login', loadChildren: '../app/login/login.module#LoginModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }