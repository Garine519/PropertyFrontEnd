import { NgModule } from "@angular/core";
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule,
  MatButtonToggleModule,
} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from "@angular/common";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FlexLayoutModule,
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
    CommonModule,
    FormsModule,
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