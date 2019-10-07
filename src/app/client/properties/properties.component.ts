import { Component, OnInit, Inject } from '@angular/core';
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
  constructor(private propertyService: PropertyService, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.propertyService.getProperties().subscribe(_properties => {
      this.properties = _properties;
    });
  }

  listUnits(propertyId: number) {
    this.router.navigate(["client/properties", propertyId, 'units']);
  }

  newProperty(){
    let dialogRef = this.dialog.open(PropertyDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editProperty(property: Property): void {
    let dialogRef = this.dialog.open(PropertyDialogComponent, {
      width: '250px',
      data: { property: property}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'property-dialog',
  templateUrl: 'property-dialog.html',
})
export class PropertyDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PropertyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
