import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('toDoAdvanced', 'postgres', 'adminadmin', {
  host: 'localhost',
  dialect: 'postgres',
});

export { sequelize };
