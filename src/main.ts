import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { HELLOWORLD_PACKAGE_NAME } from 'grpc-proto-typescript/nestjs';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.GRPC,
            options: {
                package: HELLOWORLD_PACKAGE_NAME,
                // TODO: find a way to replace this, protoPath is required. Don't know why.
                protoPath:
                    './node_modules/grpc-proto-typescript/proto/helloworld.proto',
                url: '0.0.0.0:4000',
            },
        }
    );

    await app.listen();

    console.log(`Application is running`);
}

bootstrap();
