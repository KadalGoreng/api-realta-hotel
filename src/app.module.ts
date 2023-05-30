import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleModule } from './module/module.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhostlocalhost',
      port: 5432,
      username: 'postgres',
      password: 'pokwe',
      database: 'realta-hotel',
      entities: ['../output/entities/*.ts'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ModuleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
