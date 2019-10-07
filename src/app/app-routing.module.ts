import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: '../app/login/login.module#LoginModule' },
  { path: 'client', loadChildren: '../app/client/client.module#ClientModule' },
  { path: 'login', loadChildren: '../app/login/login.module#LoginModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }