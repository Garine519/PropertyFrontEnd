import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared.module';
import { LoginService } from './loginService/login.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
