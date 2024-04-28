import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloWorld } from 'grpc-proto-nestjs';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    describe('root', () => {
        it('should return "Hello World!"', async () => {
            const request: HelloWorld.HelloRequest = { name: 'Coco' };
            const response = await appController.sayHello(request);

            expect(response).toStrictEqual({ message: 'Hello Coco' });
        });
    });
});
