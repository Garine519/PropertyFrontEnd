import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { ClientComponent } from './client.component';
import { LoginService } from '../login/loginService/login.service';
import { PropertiesModule} from './properties/properties.module';

const routes: Routes = [
  {path: '', component: ClientComponent, children: [
    {path: 'properties', loadChildren: () => PropertiesModule }
  ]},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientComponent],
  providers: [LoginService]
})
export class ClientModule { }
