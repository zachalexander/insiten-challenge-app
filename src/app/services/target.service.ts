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
    return this.http.post('mongodb://zdalexander:Biology512@ds221148.mlab.com:21148/targets/newTarget', target, {headers: headers})
      .map(res => res.json());
  }

  getAllTargets(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('mongodb://zdalexander:Biology512@ds221148.mlab.com:21148/targets/allTargets', {headers: headers})
      .map(res => res.json());
  }

  getSingleTarget(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('mongodb://zdalexander:Biology512@ds221148.mlab.com:21148/targets/singleTarget/' + id, {headers: headers})
      .map(res => res.json());
  }

  editTarget(target){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('mongodb://zdalexander:Biology512@ds221148.mlab.com:21148/targets/updateTarget/', target, {headers: headers})
      .map(res => res.json());
  }

  deleteTarget(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete('mongodb://zdalexander:Biology512@ds221148.mlab.com:21148/targets/deleteTarget/'+ id, {headers: headers})
      .map(res => res.json());
  }

}
