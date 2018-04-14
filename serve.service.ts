import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
@Injectable()
export class ServeService {

  constructor(private http:Http) { }
  postup(par){

    return this.http.post('http://172.16.16.70:8000/app/',par).map(
      (res)=>res.json()
    )

    
  }

}
