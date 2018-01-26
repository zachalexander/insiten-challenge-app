import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TargetService {
  target: any;

  constructor(
    private http: Http
  ) { }

  submitTarget(target){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/targets/newTarget', target, {headers: headers})
      .map(res => res.json());
  }
}