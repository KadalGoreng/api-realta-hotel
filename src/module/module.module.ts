import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Department } from 'output/entities/Department';
import { Employee } from 'output/entities/Employee';
import { Shift } from 'output/entities/Shift';
import { EmployeeDepartmentHistory } from 'output/entities/EmployeeDepartmentHistory';
import { WorkOrderDetail } from 'output/entities/WorkOrderDetail';
import { EmployeePayHistory } from 'output/entities/EmployeePayHistory';
import { JobRole } from 'output/entities/JobRole';
import { WorkOrders } from 'output/entities/WorkOrders';
import { Facilities } from 'output/entities/Facilities';
import { ServiceTask } from 'output/entities/ServiceTask';
import { Users } from 'output/entities/Users';

import { Address } from 'output/entities/Address';
import { Bank } from 'output/entities/Bank';
import { BookingOrderDetail } from 'output/entities/BookingOrderDetail';
import { BookingOrderDetailExtra } from 'output/entities/BookingOrderDetailExtra';
import { BookingOrders } from 'output/entities/BookingOrders';
import { CategoryGroup } from 'output/entities/CategoryGroup';
import { Country } from 'output/entities/Country';
import { Entitys } from 'output/entities/Entitys';
import { FacilityPhoto } from 'output/entities/FacilityPhoto';
import { FacilityPriceHistory } from 'output/entities/FacilityPriceHistory';
import { HotelReviews } from 'output/entities/HotelReviews';
import { Hotels } from 'output/entities/Hotels';
import { Members } from 'output/entities/Members';
import { OrderMenuDetail } from 'output/entities/OrderMenuDetail';
import { OrderMenus } from 'output/entities/OrderMenus';
import { PaymentGateway } from 'output/entities/PaymentGateway';
import { PaymentTransaction } from 'output/entities/PaymentTransaction';
import { Policy } from 'output/entities/Policy';
import { PolicyCategoryGroup } from 'output/entities/PolicyCategoryGroup';
import { PriceItems } from 'output/entities/PriceItems';
import { Proviences } from 'output/entities/Proviences';
import { PurchaseOrderDetail } from 'output/entities/PurchaseOrderDetail';
import { PurchaseOrderHeader } from 'output/entities/PurchaseOrderHeader';
import { Regions } from 'output/entities/Regions';
import { RestoMenuPhotos } from 'output/entities/RestoMenuPhotos';
import { RestoMenus } from 'output/entities/RestoMenus';
import { Roles } from 'output/entities/Roles';
import { SpecialOfferCoupons } from 'output/entities/SpecialOfferCoupons';
import { SpecialOffers } from 'output/entities/SpecialOffers';
import { StockDetail } from 'output/entities/StockDetail';
import { StockPhoto } from 'output/entities/StockPhoto';
import { Stocks } from 'output/entities/Stocks';
import { UserAccounts } from 'output/entities/UserAccounts';
import { UserBonusPoints } from 'output/entities/UserBonusPoints';
import { UserBreakfeast } from 'output/entities/UserBreakfeast';
import { UserMembers } from 'output/entities/UserMembers';
import { UserPassword } from 'output/entities/UserPassword';
import { UserProfiles } from 'output/entities/UserProfiles';
import { UserRoles } from 'output/entities/UserRoles';
import { Vendor } from 'output/entities/Vendor';

import { DepartmentService } from 'src/department/department.service';
import { DepartmentController } from 'src/department/department.controller';
import { VendorProduct } from 'output/entities/VendorProduct';

import { EmployeeService } from 'src/employee/employee.service';
import { EmployeeController } from 'src/employee/employee.controller';

import { SalaryService } from 'src/salary/salary.service';
import { SalaryController } from 'src/salary/salary.controller';

import { DephisService } from 'src/dephis/dephis.service';
import { DephisController } from 'src/dephis/dephis.controller';

import { ShiftService } from 'src/shift/shift.service';
import { ShiftController } from 'src/shift/shift.controller';

import { WoroService } from 'src/woro/woro.service';
import { WoroController } from 'src/woro/woro.controller';

import { WodeService } from 'src/wode/wode.service';
import { WodeController } from 'src/wode/wode.controller';

import { ConfigMulter } from 'src/multer/multer.middleware';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Address,
      Bank,
      BookingOrderDetail,
      BookingOrderDetailExtra,
      BookingOrders,
      CategoryGroup,
      Country,
      Entitys,
      FacilityPhoto,
      FacilityPriceHistory,
      HotelReviews,
      Hotels,
      JobRole,
      Members,
      OrderMenuDetail,
      OrderMenus,
      PaymentGateway,
      PaymentTransaction,
      Policy,
      PolicyCategoryGroup,
      PriceItems,
      Proviences,
      PurchaseOrderDetail,
      PurchaseOrderHeader,
      Regions,
      RestoMenuPhotos,
      RestoMenus,
      Roles,
      SpecialOfferCoupons,
      SpecialOffers,
      StockDetail,
      StockPhoto,
      Stocks,
      UserAccounts,
      UserBonusPoints,
      UserBreakfeast,
      UserMembers,
      UserPassword,
      UserProfiles,
      UserRoles,
      Users,
      Vendor,
      VendorProduct,
      Department,
      EmployeeDepartmentHistory,
      Employee,
      Shift,
      WorkOrderDetail,
      EmployeePayHistory,
      JobRole,
      WorkOrders,
      Facilities,
      ServiceTask,
      Users,
    ]),
    MulterModule.register(ConfigMulter.UploadFiles()),
  ],
  controllers: [
    DepartmentController,
    EmployeeController,
    SalaryController,
    DephisController,
    ShiftController,
    WoroController,
    WodeController,
  ],
  providers: [
    DepartmentService,
    EmployeeService,
    SalaryService,
    DephisService,
    ShiftService,
    WoroService,
    WodeService,
  ],
})
export class ModuleModule {}
