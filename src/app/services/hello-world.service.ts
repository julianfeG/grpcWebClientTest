import { Injectable } from '@angular/core';
import { HelloRequest, HelloResponse } from 'proto/generated/proto/hello_pb';
import { HelloWorldServiceClient } from 'proto/generated/proto/hello_pb_service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  private client: HelloWorldServiceClient;
  responseTime: any;
  constructor() {
    this.client = new HelloWorldServiceClient(
      environment.endpoint_server_grpc);
  }

  // callbackGrpc(error:any, response: HelloResponse | null) {
  //   const end = (new Date()).getTime();
  //   console.timeEnd('GRPC');
  //   this.responseTime = end - start;
  //   // Your code to handle error & response.
  //   console.log('HelloResponse: ' + response);
  // }

  hello(text: string) {
    const request = new HelloRequest();
    request.setText(text);
    let responseTime = 0;
    console.time('GRPC');
    const start = (new Date()).getTime();
    this.client.hello(
      request, (_error, response: HelloResponse | null) => {
        const end = (new Date()).getTime();
        console.timeEnd('GRPC');
        this.responseTime = end - start;
        // Your code to handle error & response.
        console.log('HelloResponse: ' + response);
        if (_error) {
          console.log('error presented: ', _error);
          this.responseTime = 0;
        }
      });
    return this.responseTime;
  }
}