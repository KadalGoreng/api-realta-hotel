import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleModule } from './module/module.module';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { SalaryController } from './salary/salary.controller';
import { SalaryService } from './salary/salary.service';
import { DephisController } from './dephis/dephis.controller';
import { DephisService } from './dephis/dephis.service';
import { ShiftController } from './shift/shift.controller';
import { ShiftService } from './shift/shift.service';
import { WoroController } from './woro/woro.controller';
import { WoroService } from './woro/woro.service';
import { WodeController } from './wode/wode.controller';
import { WodeService } from './wode/wode.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'lampu123',
      database: 'realtahotel',
      autoLoadEntities: true,
      entities: ['../output/entities/*.ts'],
      synchronize: false,
    }),
    ModuleModule,
  ],
})
export class AppModule {}
