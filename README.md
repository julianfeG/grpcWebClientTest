# GrpcWebTest This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.
## Install
1. Visit https://grpc.io/docs/protoc-installation/ and download protocol compiler.
2. Install ```npm install -g protoc-gen-js```
## Execution
1. Run: ```chmod +x genproto.sh ./genproto.sh```
2. Run: ```docker run --rm -v "$(pwd)"/proxy/envoy.yaml:/etc/envoy/envoy.yaml:ro -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.14.1```