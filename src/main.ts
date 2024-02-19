import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { AppDataSource } from './data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  // await AppDataSource.initialize()
  //   .then(() => {
  //     console.log('Data initialized...');
  //   })
  //   .catch((error) => console.log(error));
}
bootstrap();
