import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleModule } from './module/module.module';
// import { StockPhotoController } from './stock-photo/stock-photo.controller';
// import { StockPhotoService } from './stock-photo/stock-photo.service';
// import { StocksService } from './stocks/stocks.service';
// import { StocksController } from './stocks/stocks.controller';
import { VendorProductController } from './vendor-product/vendor-product.controller';
import { VendorProductService } from './vendor-product/vendor-product.service';
import { StockDetailService } from './stock-detail/stock-detail.service';
import { StockDetailController } from './stock-detail/stock-detail.controller';
import { VendorController } from './vendor/vendor.controller';
import { VendorService } from './vendor/vendor.service';
import { PurchaseOrderHeaderService } from './purchase-order-header/purchase-order-header.service';
import { PurchaseOrderHeaderController } from './purchase-order-header/purchase-order-header.controller';
import { PurchaseOrderDetailController } from './purchase-order-detail/purchase-order-detail.controller';
import { PurchaseOrderDetailService } from './purchase-order-detail/purchase-order-detail.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'realta-hotel',
      entities: ['dist/output/entities/*.ts'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ModuleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
