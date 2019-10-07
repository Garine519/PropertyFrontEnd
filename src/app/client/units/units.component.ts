import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit, Property } from '../properties/propertyService/property.service';
import { PropertyService } from '../properties/propertyService/property.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  property = "Westland Towers";
  displayedColumns = ['number', 'floor', 'rent'];
  pagelength = 100;

  propertyId: any;
  units: MatTableDataSource<Unit>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) {
    this.route.params.subscribe(params => {
      this.propertyId = params['id'];
      this.loadUnits();
    });
  }

  ngOnInit() {
  }

  loadUnits() {
    this.propertyService.getProperties({ _id: this.propertyId }).subscribe((result: Property[]) => {
      this.units = new MatTableDataSource<Unit>(result[0].units);
      this.units.paginator = this.paginator; 
      this.pagelength = this.units.data.length;
    });
  }

}
