import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit, Property } from '../properties/propertyService/property.service';
import { PropertyService } from '../properties/propertyService/property.service';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  property: Property;
  displayedColumns = ['number', 'floor', 'rent'];
  pagelength = 100;

  propertyId: any;
  units: MatTableDataSource<Unit>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService, private dialog: MatDialog) {
    this.route.params.subscribe(params => {
      this.propertyId = params['id'];
      this.refresh();
    });
  }

  ngOnInit() {
  }

  refresh(){
    this.loadUnits();
  }

  loadUnits() {
    this.propertyService.getProperties({ _id: this.propertyId }).subscribe((result: Property[]) => {
      this.property = result[0];
      this.units = new MatTableDataSource<Unit>(result[0].units);
      this.units.paginator = this.paginator; 
      this.pagelength = this.units.data.length;
    });
  }

  newUnit(){
    let dialogRef = this.dialog.open(UnitDialogComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.propertyService.addUnit(this.propertyId, result).subscribe((res: any) => {
          this.refresh();
        });
      }
    });
  }

}

@Component({
  selector: 'unit-dialog',
  templateUrl: 'unit-dialog.html',
})
export class UnitDialogComponent {
  public unit = { number: 1, floor: 1, rent: 1000, vacant: true };
  constructor(
    public dialogRef: MatDialogRef<UnitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      if (data){
        this.unit = data.unit;
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    console.log(this.unit);
    this.dialogRef.close(this.unit);
  }

}