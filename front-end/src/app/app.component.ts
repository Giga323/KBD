import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "./services/api.service";
import {response} from "express";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: any = [];

  private request: string = '';

  constructor(
    private apiService: ApiService
  ) { };

  public sendRequest(request: string) {
    this.apiService.post(request).subscribe(
      (response) => {
        this.data = response;
        console.log(this.data)
      }
    );
  }
}
