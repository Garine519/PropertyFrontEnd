import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { PropertiesComponent} from './properties.component';
import { PropertyService } from '../properties/propertyService/property.service';
import { UnitsComponent, UnitDialogComponent } from '../units/units.component';
import { PropertyDialogComponent } from './properties.component';

const routes: Routes = [
  { path: '', component: PropertiesComponent },
  { path: ':id/units', component: UnitsComponent },

];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [PropertyDialogComponent, UnitDialogComponent],
  declarations: [PropertiesComponent, UnitsComponent, PropertyDialogComponent, UnitDialogComponent],
  providers: [
    PropertyService
  ]
})
export class PropertiesModule { }
