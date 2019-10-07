import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';

const PROPERTIES_PATH = `${environment.BASE_API_PATH}/api/properties`;

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
    const user =  JSON.parse(localStorage.getItem('user'));
    const token = user ? user.token : '';
    return this.http.post<Property[]>(PROPERTIES_PATH, query, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      params: {
        limit: `${params.limit}`,
        offset: `${params.offset}`
      }
    });
  }
}
