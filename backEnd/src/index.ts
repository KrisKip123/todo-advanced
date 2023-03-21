import http from 'node:http';
import express from 'express';
import dotenv from 'dotenv';
import initLoaders from './loaders/index.js';
import { UserModel } from './DataBase/models/UserModel.js';
dotenv.config();

const appExpress = express();

new initLoaders(appExpress).init();

const app = http.createServer(appExpress);

const connect = async () => {
  await UserModel.sync();

  app.listen(process.env.PORT, () => {
    console.log(`Server start ${process.env.PORT}`);
  });
};

connect();
