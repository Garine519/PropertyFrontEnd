import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';

const PROPERTIES_PATH = `${environment.BASE_API_PATH}/api/properties`;
const ADD_PROPERTY_PATH = `${environment.BASE_API_PATH}/api/property/create`;
const EDIT_PROPERTY_PATH = `${environment.BASE_API_PATH}/api/property/update`;
const DELETE_PROPERTY_PATH = `${environment.BASE_API_PATH}/api/property/delete`;


export interface Unit {
  number: string;
  floor: number;
  rent: number;
  vacant?: boolean;
}

export interface Property {
  _id?: string; // Assigned automatically by datastore
  name: string;
  address: string;
  units: Unit[];
}


@Injectable()
export class PropertyService {

  constructor(
    private http: HttpClient
  ) { }

  public getProperties(query: any = {}, params: { limit: number; offset: number } = { limit: 100, offset: 0 }): Observable<Property[]> {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user ? user.token : '';
    return this.http.post<Property[]>(PROPERTIES_PATH, query, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      params: {
        limit: `${params.limit}`,
        offset: `${params.offset}`
      }
    });
  }

  public addProperty(property: Property) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user ? user.token : '';
    return this.http.post<Property>(ADD_PROPERTY_PATH, property, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }

  public editProperty(property: Property) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user ? user.token : '';
    return this.http.post<Property>(EDIT_PROPERTY_PATH, property, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }

  public delete(property: Property) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user ? user.token : '';
    return this.http.delete(DELETE_PROPERTY_PATH, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      params: {
        property: JSON.stringify(property),
      }
    });
  }
}
