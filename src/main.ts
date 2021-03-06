import { NestFactory } from '@nestjs/core';
import { grpcClientOptions } from './grpc-client.options';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, grpcClientOptions);
  await app.listenAsync();
}
bootstrap();
