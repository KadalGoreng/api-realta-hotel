import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleModule } from './module/module.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '',
      port: 5432,
      username: '',
      password: '',
      database: '',
      autoLoadEntities: true,
      // entities: ['../output/entities/*.ts'],
      synchronize: false,
    }),
    ModuleModule,
  ],
})
export class AppModule {}
