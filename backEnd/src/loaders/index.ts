import { Express } from 'express';
import AppLoaders from './AppLoaders.js';
import Routers from './Routers.js';
import { errorHandler } from '../middlewares/errorHandler.js';

class initLoaders {
  app: Express;
  constructor(app: Express) {
    this.app = app;
  }

  init() {
    new AppLoaders(this.app).init();

    new Routers(this.app).init();

    this.app.use(errorHandler);
  }
}

export default initLoaders;
