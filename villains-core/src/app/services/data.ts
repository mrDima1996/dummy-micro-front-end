import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import {Data} from "../interfaces/data.interface";
import {backend_url} from "../consts/urls";

@Injectable()
export class DataService {
  constructor(private http: HttpClient){

  }

  getData() {
    return this.http.get<Data[]>(backend_url)
  }
}
