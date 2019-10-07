import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { PropertyService, Property, Unit } from './propertyService/property.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})

export class PropertiesComponent implements OnInit {
  properties: Property[] = [];
  displayedColumns = ['name', 'address', 'unit', 'actions'];
  constructor(private propertyService: PropertyService, private router: Router, private cdr: ChangeDetectorRef,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.loadProperties();
  }

  loadProperties() {
    this.propertyService.getProperties().subscribe(_properties => {
      this.properties = _properties;
      this.cdr.detectChanges();
    });
  }

  listUnits(propertyId: number) {
    this.router.navigate(["client/properties", propertyId, 'units']);
  }

  newProperty() {
    let dialogRef = this.dialog.open(PropertyDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.propertyService.addProperty(result).subscribe((res: any) => {
          this.refresh();
        });
      }
    });
  }

  editProperty(property: Property) {
    let dialogRef = this.dialog.open(PropertyDialogComponent, {
      width: '800px',
      data: {property: property}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.propertyService.editProperty(result).subscribe((res: any) => {
          this.refresh();
        });
      }
    });
  }

  delete(property: Property): void {
    this.propertyService.delete(property).subscribe((res: any) => {
      this.refresh();
    });
  }
}

@Component({
  selector: 'property-dialog',
  templateUrl: 'property-dialog.html',
})
export class PropertyDialogComponent {
  public property = { name: '', address: '', units: [] };
  constructor(
    public dialogRef: MatDialogRef<PropertyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      if (data){
        this.property = data.property;
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    console.log(this.property);
    this.dialogRef.close(this.property);
  }

}
