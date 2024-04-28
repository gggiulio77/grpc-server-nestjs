import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloWorld } from 'grpc-proto-nestjs';
import { Payload } from '@nestjs/microservices';

@Controller('helloworld')
@HelloWorld.GreeterControllerMethods()
export class AppController implements HelloWorld.GreeterController {
    constructor(private readonly appService: AppService) {}

    async sayHello(
        @Payload() request: HelloWorld.HelloRequest
    ): Promise<HelloWorld.HelloResponse> {
        console.log(request);

        return new Promise((resolve) => {
            const response: HelloWorld.HelloResponse = {
                message: `Hello ${request.name}`,
            };

            resolve(response);
        });
    }
}
