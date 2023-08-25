import { Component } from '@angular/core';
import { HelloWorldService } from './services/hello-world.service';
import { HelloWorldRestService } from './services/hello-world-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timeResponseGRPC: any;
  timeResponseREST: any;
  numberTryGRPC = 0;
  numberTryREST = 0;
  totalGRPC = 0;
  totalREST = 0;

  constructor(private client: HelloWorldService, private clientRest: HelloWorldRestService) {
    this.callServices();
  }

  callServices() {
    this.restServiceCall();
    this.grpcServiceCall();
  }

  restServiceCall() {
    console.time('REST');
    const start = (new Date()).getTime();
    this.clientRest.hello('Cruel World').subscribe(_data => {
      const end = (new Date()).getTime();
      console.timeEnd('REST');
      this.timeResponseREST = end - start;
      this.totalREST += this.timeResponseREST;
      this.numberTryREST++;
      });
  }

  grpcServiceCall() {
    this.timeResponseGRPC = this.client.hello("Hello");
    if(this.timeResponseGRPC) {
      this.totalGRPC += this.timeResponseGRPC;
      console.log('res', this.timeResponseGRPC);
      this.numberTryGRPC++;
      console.log(this.numberTryGRPC, this.totalGRPC);
    }
  }
}
