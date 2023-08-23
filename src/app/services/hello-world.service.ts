import { Injectable } from '@angular/core';
import { HelloRequest, HelloResponse } from 'proto/generated/proto/hello_pb';
import { HelloWorldServiceClient } from 'proto/generated/proto/hello_pb_service';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  private client: HelloWorldServiceClient;
  
  constructor() {
    this.client = new HelloWorldServiceClient(
      'http://localhost:8080');
  }
  
  hello(text: string): void {
    const request = new HelloRequest();
    request.setText(text);
    this.client.hello(
      request, (error, response: HelloResponse | null) => {
        // Your code to handle error & response.
        console.log('Error: ' + error);
        console.log('HelloResponse: ' + response);
      });
  }
}