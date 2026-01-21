import dotenv from 'dotenv';

dotenv.config();

export type DatabaseConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  ssl: boolean;
  logging: boolean;
  synchronize: boolean;
};

const toBoolean = (value: string | undefined, defaultValue: boolean): boolean => {
  if (value === undefined) {
    return defaultValue;
  }

  const normalized = value.trim().toLowerCase();
  return ['true', '1', 'yes', 'y', 'on'].includes(normalized);
};

const toNumber = (value: string | undefined, defaultValue: number): number => {
  if (value === undefined) {
    return defaultValue;
  }

  const parsed = Number(value);
  return Number.isNaN(parsed) ? defaultValue : parsed;
};

export const databaseConfig: DatabaseConfig = {
  host: process.env.TYPEORM_DB_HOST ?? 'localhost',
  port: toNumber(process.env.TYPEORM_DB_PORT, 5432),
  username: process.env.TYPEORM_DB_USERNAME ?? '',
  password: process.env.TYPEORM_DB_PASSWORD ?? '',
  database: process.env.TYPEORM_DB_NAME ?? 'GroupaERP',
  ssl: toBoolean(process.env.TYPEORM_DB_SSL, false),
  logging: toBoolean(process.env.TYPEORM_DB_LOGGING, true),
  synchronize: toBoolean(process.env.TYPEORM_DB_SYNCHRONIZE, true),
};
