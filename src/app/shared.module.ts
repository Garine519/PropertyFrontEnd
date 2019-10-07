import {NgModule} from "@angular/core";
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, 
  MatButtonToggleModule,
} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
  FormsModule,
  MatCheckboxModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  CommonModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatButtonModule, 
  MatButtonToggleModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule
  ],
  exports: [
   FormsModule,
   CommonModule,
   FlexLayoutModule,
   MatPaginatorModule,
   MatToolbarModule, 
   ReactiveFormsModule,
   MatButtonModule, 
   MatCardModule, 
   MatButtonToggleModule,
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatCheckboxModule,
   MatIconModule,
   MatProgressSpinnerModule
   ],
})
export class SharedModule { }