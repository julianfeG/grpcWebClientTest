import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldRestService {

  constructor(private http: HttpClient) {

  }

  hello(text: string) {
    return this.http.post(environment.endpoint_server_rest + '/hello/greeting', {text});
  }
}
