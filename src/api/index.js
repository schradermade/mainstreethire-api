import { createServer } from '@vercel/node';
import { app } from '../../dist/main'; // Adjust the path to your dist/main

export default createServer(app);
