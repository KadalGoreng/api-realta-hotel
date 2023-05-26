"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMenuDetailController = void 0;
const common_1 = require("@nestjs/common");
const order_menu_detail_service_1 = require("./order-menu-detail.service");
let OrderMenuDetailController = class OrderMenuDetailController {
    constructor(orderMenuDetailService) {
        this.orderMenuDetailService = orderMenuDetailService;
    }
    findAllOrderMenuDetail() {
        return this.orderMenuDetailService.findAllOrderMenuDetail();
    }
    findOneOrderMenuDetail(params) {
        return this.orderMenuDetailService.findOneOrderMenuDetail(params.id);
    }
    createOrderMenuDetail(body) {
        const result = this.orderMenuDetailService.createOrderMenusDetail(body);
        if (result) {
            console.log('Data Berhasil ditambahkan');
        }
        else {
            console.log('GAGAL');
        }
    }
    updateOrderMenuDetail(params, body) {
        return this.orderMenuDetailService.updateOrdeMenuDetail(params.id, body);
    }
    deleteOrderMenuDetail(params) {
        return this.orderMenuDetailService.deleteOrdeMenuDetail(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderMenuDetailController.prototype, "findAllOrderMenuDetail", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderMenuDetailController.prototype, "findOneOrderMenuDetail", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderMenuDetailController.prototype, "createOrderMenuDetail", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], OrderMenuDetailController.prototype, "updateOrderMenuDetail", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], OrderMenuDetailController.prototype, "deleteOrderMenuDetail", null);
OrderMenuDetailController = __decorate([
    (0, common_1.Controller)('order-menu-detail'),
    __metadata("design:paramtypes", [order_menu_detail_service_1.OrderMenuDetailService])
], OrderMenuDetailController);
exports.OrderMenuDetailController = OrderMenuDetailController;
//# sourceMappingURL=order-menu-detail.controller.js.map