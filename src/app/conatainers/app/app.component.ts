import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data";
import {Observable} from "rxjs";
import {filter} from "rxjs/operators";
import {Data} from "../../interfaces/data.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tableData$: Observable<Data[]>;
  public displayedColumns: string[] = ['position', 'name'];

  constructor(private dataService: DataService) {
    this.tableData$ = this.dataService.getData().pipe(
      filter(data => !!data)
    );
  }

}
