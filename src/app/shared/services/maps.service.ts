import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiKey} from '../apiKey';

@Injectable()
export class MapsService {
  constructor(private http: HttpClient) {
  }

  getLocation(address) {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},20&key=${apiKey}`);
  }
}
