import { Express } from 'express';
import { authRoute } from '../routes/AuthRoute.js';

class Routers {
  app: Express;
  constructor(app: Express) {
    this.app = app;
  }

  init() {
    this.app.use('/user', authRoute);
  }
}

export default Routers;
