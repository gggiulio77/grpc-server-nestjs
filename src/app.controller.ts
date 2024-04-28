import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Payload } from '@nestjs/microservices';
import {
    GreeterController,
    GreeterControllerMethods,
    HelloRequest,
    HelloResponse,
    GREETER_SERVICE_NAME,
} from 'grpc-proto-typescript/nestjs/helloworld';

@Controller(GREETER_SERVICE_NAME)
@GreeterControllerMethods()
export class AppController implements GreeterController {
    constructor(private readonly appService: AppService) {}

    async sayHello(@Payload() request: HelloRequest): Promise<HelloResponse> {
        console.log(request);

        return new Promise((resolve) => {
            const response: HelloResponse = {
                message: `Hello ${request.name}`,
            };

            resolve(response);
        });
    }
}
