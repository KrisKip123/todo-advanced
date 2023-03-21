import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

class AppLoaders {
  app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  init() {
    this.app.use(express.json());

    this.app.use(cookieParser());

    this.app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
  }
}

export default AppLoaders;
