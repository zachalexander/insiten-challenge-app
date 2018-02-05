import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TargetService {
  target: any;

  domain = "http://localhost:8080"; // for development
  // domain = ""; // for production

  constructor(
    private http: Http
  ) { }

  submitTarget(target){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.domain + '/targets/newTarget', target, {headers: headers})
      .map(res => res.json());
  }

  getAllTargets(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.domain + '/targets/allTargets', {headers: headers})
      .map(res => res.json());
  }

  getSingleTarget(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.domain + '/targets/singleTarget/' + id, {headers: headers})
      .map(res => res.json());
  }

  editTarget(target){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.domain + '/targets/updateTarget/', target, {headers: headers})
      .map(res => res.json());
  }

  deleteTarget(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.domain + '/targets/deleteTarget/'+ id, {headers: headers})
      .map(res => res.json());
  }

}
