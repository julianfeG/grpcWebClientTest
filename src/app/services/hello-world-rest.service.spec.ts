import { TestBed } from '@angular/core/testing';

import { HelloWorldRestService } from './hello-world-rest.service';

describe('HelloWorldRestService', () => {
  let service: HelloWorldRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWorldRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
