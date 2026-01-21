import 'reflect-metadata';
import path from 'node:path';
import { DataSource } from 'typeorm';
import { databaseConfig } from './config/database.config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  ssl: databaseConfig.ssl,
  logging: databaseConfig.logging,
  synchronize: databaseConfig.synchronize,
  entities: [path.join(__dirname, '..', 'entity', '**', '*.{ts,js}')],
  migrations: [path.join(__dirname, 'migrations', '**', '*.{ts,js}')],
});

