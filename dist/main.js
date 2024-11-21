"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_express_1 = require("@nestjs/platform-express");
const express = require("express");
const server = express();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.enableCors();
    console.log('__dirname:', __dirname);
    const port = process.env.PORT || 3001;
    await app.listen(port);
    await app.init();
    console.log(`Application listening on port ${port}`);
}
bootstrap();
exports.default = server;
//# sourceMappingURL=main.js.map