"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const OrderMenuDetail_1 = require("../../output/entities/OrderMenuDetail");
const OrderMenus_1 = require("../../output/entities/OrderMenus");
const RestoMenuPhotos_1 = require("../../output/entities/RestoMenuPhotos");
const RestoMenus_1 = require("../../output/entities/RestoMenus");
const order_menu_detail_controller_1 = require("../order-menu-detail/order-menu-detail.controller");
const order_menu_detail_service_1 = require("../order-menu-detail/order-menu-detail.service");
const order_menus_controller_1 = require("../order-menus/order-menus.controller");
const order_menus_service_1 = require("../order-menus/order-menus.service");
const resto_menus_photos_service_1 = require("../resto-menus-photos/resto-menus-photos.service");
const resto_menus_controller_spec_1 = require("../resto-menus/resto-menus.controller.spec");
const resto_menus_service_1 = require("../resto-menus/resto-menus.service");
let ModuleModule = class ModuleModule {
};
ModuleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                OrderMenuDetail_1.OrderMenuDetail,
                OrderMenus_1.OrderMenus,
                RestoMenuPhotos_1.RestoMenuPhotos,
                RestoMenus_1.RestoMenus,
            ]),
        ],
        providers: [
            resto_menus_service_1.RestoMenusService,
            resto_menus_photos_service_1.RestoMenuPhotosService,
            order_menus_service_1.OrderMenusService,
            order_menu_detail_service_1.OrderMenuDetailService,
        ],
        controllers: [
            resto_menus_controller_spec_1.RestoMenusController,
            resto_menus_controller_spec_1.RestoMenusController,
            order_menus_controller_1.OrderMenusController,
            order_menu_detail_controller_1.OrderMenuDetailController,
        ],
    })
], ModuleModule);
exports.ModuleModule = ModuleModule;
//# sourceMappingURL=module.module.js.map