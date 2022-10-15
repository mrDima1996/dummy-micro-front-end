import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import {Data} from "../interfaces/data.interface";

@Injectable()
export class DataService {
  constructor(private http: HttpClient){

  }

  getData() {
    return this.http.get<Data[]>('http://localhost:8000')
  }
}
