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
import { ServiceTask } from 'output/entities/ServiceTask';
import { Shift } from 'output/entities/Shift';
import { SpecialOfferCoupons } from 'output/entities/SpecialOfferCoupons';
import { SpecialOffers } from 'output/entities/SpecialOffers';
import { StockDetail } from 'output/entities/StockDetail';
import { StockPhoto } from 'output/entities/StockPhoto';
import { Stocks } from 'output/entities/Stocks';
import { UserAccounts } from 'output/entities/UserAccounts';
import { UserBreakfeast } from 'output/entities/UserBreakfeast';
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
import { BookingOrderController } from 'src/booking/order/order.controller';
import { SpecialOfferController } from 'src/booking/special-offer/special-offer.controller';
import { BookingOrderService } from 'src/booking/order/order.service';
import { SpecialOfferService } from 'src/booking/special-offer/special-offer.service';
import { RegionsController } from 'src/master/regions/regions.controller';
import { PolicyController } from 'src/master/policy/policy.controller';
import { PriceItemsController } from 'src/master/price-items/price-items.controller';
import { RegionsService } from 'src/master/regions/regions.service';
import { PolicyService } from 'src/master/policy/policy.service';
import { PriceItemsService } from 'src/master/price-items/price-items.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { OrderDetailExtraController } from 'src/booking/order-detail-extra/order-detail-extra.controller';
import { OrderDetailExtraService } from 'src/booking/order-detail-extra/order-detail-extra.service';
import { AddressService } from 'src/master/address/address.service';
import { CategoryGroupService } from 'src/master/category-group/category-group.service';
import { OrderDetailService } from 'src/booking/order-detail/order-detail.service';
import { OrderDetailController } from 'src/booking/order-detail/order-detail.controller';
import { CategoryGroupController } from 'src/master/category-group/category-group.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalGuard } from 'src/auth/local.strategy';
import { JwtGuard } from 'src/auth/jwt.strategy';
import { CountryController } from 'src/master/country/country.controller';
import { CountryService } from 'src/master/country/country.service';
import { ProvincesService } from 'src/master/province/province.service';
import { ProvincesController } from 'src/master/province/province.controller';
import { AddressController } from 'src/master/address/address.controller';
import { ServiceTaskController } from 'src/master/service-task/service-task.controller';
import { ServiceTaskService } from 'src/master/service-task/service-task.service';
import { Roles } from 'output/entities/Roles';
import { Members } from 'output/entities/Members';
import { Users } from 'output/entities/Users';
import { Address } from 'output/entities/Address';
import { UserRoles } from 'output/entities/UserRoles';
import { UserBonusPoints } from 'output/entities/UserBonusPoints';
import { UserMembers } from 'output/entities/UserMembers';
import { UserPassword } from 'output/entities/UserPassword';
import { UserProfiles } from 'output/entities/UserProfiles';
import { StocksController } from 'src/purchasing/stocks/stocks.controller';
import { VendorProductController } from 'src/purchasing/vendor-product/vendor-product.controller';
import { EmployeeController } from 'src/hr/employee/employee.controller';
import { StockPhotoController } from 'src/purchasing/stock-photo/stock-photo.controller';
import { PurchaseOrderDetailController } from 'src/purchasing/purchase-order-detail/purchase-order-detail.controller';
import { PurchaseOrderHeaderController } from 'src/purchasing/purchase-order-header/purchase-order-header.controller';
import { VendorController } from 'src/purchasing/vendor/vendor.controller';
import { StockDetailController } from 'src/purchasing/stock-detail/stock-detail.controller';
import { StocksService } from 'src/purchasing/stocks/stocks.service';
import { VendorProductService } from 'src/purchasing/vendor-product/vendor-product.service';
import { VendorService } from 'src/purchasing/vendor/vendor.service';
import { StockDetailService } from 'src/purchasing/stock-detail/stock-detail.service';
import { PurchaseOrderHeaderService } from 'src/purchasing/purchase-order-header/purchase-order-header.service';
import { StockPhotoService } from 'src/purchasing/stock-photo/stock-photo.service';
import { PurchaseOrderDetailService } from 'src/purchasing/purchase-order-detail/purchase-order-detail.service';
import { EmployeeService } from 'src/hr/employee/employee.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../', ''),
    }),
    TypeOrmModule.forFeature([
      Roles,
      Members,
      Users,
      Address,
      UserRoles,
      UserBonusPoints,
      UserPassword,
      UserMembers,
      UserProfiles,
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
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '2d' },
    }),
    MulterModule.register(ConfigMulter.Uploadfiles()),
  ],
  controllers: [
    UserProfilesController,
    UserMembersController,
    UserPasswordController,
    UserBonusPointsController,
    UserRolesController,
    UsersController,
    RolesController,
    BankController,
    PaymentGatewayController,
    PaymentTransactionController,
    UserAccountController,
    HotelsController,
    FacilitiesController,
    HotelReviewController,
    FacilityPriceHistoryController,
    FacilityPhotoController,
    CategoryGroupController,
    BookingOrderController,
    SpecialOfferController,
    RegionsController,
    CountryController,
    ProvincesController,
    AddressController,
    PolicyController,
    ServiceTaskController,
    PriceItemsController,
    OrderDetailExtraController,
    OrderDetailController,
    StocksController,
    VendorProductController,
    StockDetailController,
    VendorController,
    PurchaseOrderHeaderController,
    PurchaseOrderDetailController,
    StockPhotoController,
    EmployeeController,
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
    RolesService,
    UserService,
    UserBonusPointsService,
    UserMembersService,
    UserPasswordService,
    UserProfilesService,
    UserRolesService,
    UsersService,
    LocalGuard,
    JwtGuard,
    BookingOrderService,
    SpecialOfferService,
    RegionsService,
    CountryService,
    ProvincesService,
    AddressService,
    PolicyService,
    ServiceTaskService,
    PriceItemsService,
    OrderDetailExtraService,
    AddressService,
    CategoryGroupService,
    OrderDetailService,
    StocksService,
    VendorProductService,
    StockDetailService,
    VendorService,
    PurchaseOrderHeaderService,
    PurchaseOrderDetailService,
    StockPhotoService,
    EmployeeService,
  ],
  exports: [UserService],
})
export class ModuleModule {}
