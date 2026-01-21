import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: databaseConfig.host,
        port: databaseConfig.port,
        username: databaseConfig.username,
        password: databaseConfig.password,
        database: databaseConfig.database,
        ssl: databaseConfig.ssl ? { rejectUnauthorized: false } : false,
        logging: databaseConfig.logging,
        synchronize: databaseConfig.synchronize,
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
