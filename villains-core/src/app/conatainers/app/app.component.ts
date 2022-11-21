import {Component, ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import {DataService} from "../../services/data";
import {Observable} from "rxjs";
import {filter} from "rxjs/operators";
import {Data} from "../../interfaces/data.interface";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {boston_frontend_url} from "../../consts/urls";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tableData$: Observable<Data[]>;
  public displayedColumns: string[] = ['position', 'name', 'cape_name', 'environment'];
  public boston_frontend_url: SafeResourceUrl;


  @ViewChild('bostonVillains', { read: ViewContainerRef, static: true })// @ts-ignore:
  public bostonVillains: ViewContainerRef;

  constructor(private dataService: DataService, private domSanitizer: DomSanitizer) {
    this.boston_frontend_url =  this.domSanitizer.bypassSecurityTrustResourceUrl(boston_frontend_url);

    this.tableData$ = this.dataService.getData().pipe(
      filter(data => !!data)
    );
  }
}
