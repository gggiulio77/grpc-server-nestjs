import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { HelloWorld } from 'grpc-proto-nestjs';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.GRPC,
            options: {
                package: HelloWorld.HELLOWORLD_PACKAGE_NAME,
                // TODO: find a way to replace this, protoPath is required. Don't know why.
                protoPath:
                    './node_modules/grpc-proto-nestjs/proto/helloworld.proto',
                url: '0.0.0.0:4000',
            },
        }
    );

    await app.listen();

    console.log(`Application is running`);
}

bootstrap();
