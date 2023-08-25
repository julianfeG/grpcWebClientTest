import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldRestService {

  constructor(private http: HttpClient) {

  }

  hello(text: string) {
    return this.http.post('http://localhost:3300/hello/greeting', {text});
  }
}
