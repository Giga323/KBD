import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpModule: HttpClient
  ) { };

  public post(request: string) {
    return this.httpModule.post('http://localhost:3000/api/post', {
      "string": request
    });
  };

}
