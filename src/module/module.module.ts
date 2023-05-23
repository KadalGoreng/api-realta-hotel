import { Module } from '@nestjs/common';
import { RolesService } from 'src/users/roles/roles.service';
import { RolesController } from 'src/users/roles/roles.controller';
import { UsersService } from 'src/users/users/users.service';
import { UsersController } from 'src/users/users/users.controller';
import { UserRolesService } from 'src/users/user-roles/user-roles.service';
import { UserRolesController } from 'src/users/user-roles/user-roles.controller';
import { UserBonusPointsService } from 'src/users/user-bonus-points/user-bonus-points.service';
import { UserBonusPointsController } from 'src/users/user-bonus-points/user-bonus-points.controller';
import UserPasswordService from 'src/users/user-password/user-password.service';
import { UserPasswordController } from 'src/users/user-password/user-password.controller';
import { UserMembersService } from 'src/users/user-members/user-members.service';
import { UserMembersController } from 'src/users/user-members/user-members.controller';
import { UserProfilesService } from 'src/users/user-profiles/user-profiles.service';
import { UserProfilesController } from 'src/users/user-profiles/user-profiles.controller';
import { UserController } from 'src/users/user/user.controller';
import { UserService } from 'src/users/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankController } from 'src/payment/bank/bank.controller';
import { BankService } from 'src/payment/bank/bank.service';
import { PaymentGatewayController } from 'src/payment/paygateway/paygateway.controller';
import { PaymentGatewayService } from 'src/payment/paygateway/paygateway.service';
import { PaymentTransactionController } from 'src/payment/paytransaction/paytransaction.controller';
import { PaymentTransactionService } from 'src/payment/paytransaction/paytransaction.service';
import { UserAccountController } from 'src/payment/useraccount/useraccount.controller';
import { UserAccountService } from 'src/payment/useraccount/useraccount.service';
import { Address } from 'output/entities/Address';
import { Bank } from 'output/entities/Bank';
import { BookingOrderDetail } from 'output/entities/BookingOrderDetail';
import { BookingOrderDetailExtra } from 'output/entities/BookingOrderDetailExtra';
import { BookingOrders } from 'output/entities/BookingOrders';
import { CategoryGroup } from 'output/entities/CategoryGroup';
import { Country } from 'output/entities/Country';
import { Department } from 'output/entities/Department';
import { Employee } from 'output/entities/Employee';
import { EmployeeDepartmentHistory } from 'output/entities/EmployeeDepartmentHistory';
import { EmployeePayHistory } from 'output/entities/EmployeePayHistory';
import { Entitys } from 'output/entities/Entitys';
import { Facilities } from 'output/entities/Facilities';
import { FacilityPhoto } from 'output/entities/FacilityPhoto';
import { FacilityPriceHistory } from 'output/entities/FacilityPriceHistory';
import { HotelReviews } from 'output/entities/HotelReviews';
import { Hotels } from 'output/entities/Hotels';
import { JobRole } from 'output/entities/JobRole';
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
import { ServiceTask } from 'output/entities/ServiceTask';
import { Shift } from 'output/entities/Shift';
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
import { Users } from 'output/entities/Users';
import { Vendor } from 'output/entities/Vendor';
import { VendorProduct } from 'output/entities/VendorProduct';
import { WorkOrderDetail } from 'output/entities/WorkOrderDetail';
import { WorkOrders } from 'output/entities/WorkOrders';
import { FacilitiesController } from 'src/hotels/facilities/facilities.controller';
import { FacilitiesService } from 'src/hotels/facilities/facilities.service';
import { FacilityPhotoController } from 'src/hotels/facility-photo/facility-photo.controller';
import { FacilityPhotoService } from 'src/hotels/facility-photo/facility-photo.service';
import { FacilityPriceHistoryController } from 'src/hotels/facility-price-history/facility-price-history.controller';
import { FacilityPriceHistoryService } from 'src/hotels/facility-price-history/facility-price-history.service';
import { HotelReviewController } from 'src/hotels/hotel-reviews/hotel-reviews.controller';
import { HotelReviewsService } from 'src/hotels/hotel-reviews/hotel-reviews.service';
import { HotelsController } from 'src/hotels/hotels.controller';
import { HotelsService } from 'src/hotels/hotels.service';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigMulter } from 'src/multer/multer.middleware';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalGuard } from 'src/auth/local.strategy';
import { JwtGuard } from 'src/auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Hotels,
      HotelReviews,
      Facilities,
      FacilityPhoto,
      FacilityPriceHistory,
      Address,
      Bank,
      BookingOrderDetail,
      BookingOrderDetailExtra,
      BookingOrders,
      CategoryGroup,
      Country,
      Department,
      Employee,
      EmployeeDepartmentHistory,
      EmployeePayHistory,
      Entitys,
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
      ServiceTask,
      Shift,
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
      WorkOrderDetail,
      WorkOrders,
      Hotels,
      HotelReviews,
      Facilities,
      FacilityPhoto,
      FacilityPriceHistory,
      Address,
      Bank,
      BookingOrderDetail,
      BookingOrderDetailExtra,
      BookingOrders,
      CategoryGroup,
      Country,
      Department,
      Employee,
      EmployeeDepartmentHistory,
      EmployeePayHistory,
      Entitys,
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
      ServiceTask,
      Shift,
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
      WorkOrderDetail,
      WorkOrders,
    ]),
    MulterModule.register(ConfigMulter.Uploadfiles()),
  ],
  controllers: [
    BankController,
    PaymentGatewayController,
    PaymentTransactionController,
    UserAccountController,
    HotelsController,
    FacilitiesController,
    HotelReviewController,
    FacilityPriceHistoryController,
    FacilityPhotoController,
  ],
  providers: [
    BankService,
    PaymentGatewayService,
    PaymentTransactionService,
    UserAccountService,
    HotelsService,
    FacilitiesService,
    HotelReviewsService,
    FacilityPriceHistoryService,
    FacilityPhotoService,
  ],
  exports: [
    BankService,
    PaymentGatewayService,
    PaymentTransactionService,
    UserAccountService,
  ],
})
export class ModuleModule {}
