import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server),
  );

  // Serve static files from the "public" directory
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Enable CORS
  app.enableCors();
  console.log('__dirname:', __dirname);

  // const port = process.env.PORT || 3001;

  // await app.listen(port);

  // Initialize the app without binding to a specific port
  await app.init();

  console.log(`App listening on port`);
}

// Start the app
bootstrap();

// Export the server for Vercel compatibility
export default server;
