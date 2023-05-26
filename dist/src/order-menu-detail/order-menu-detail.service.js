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
exports.OrderMenuDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const OrderMenuDetail_1 = require("../../output/entities/OrderMenuDetail");
const typeorm_2 = require("@nestjs/typeorm");
let OrderMenuDetailService = class OrderMenuDetailService {
    constructor(orderMenuDetailRepository) {
        this.orderMenuDetailRepository = orderMenuDetailRepository;
    }
    async findAllOrderMenuDetail() {
        return await this.orderMenuDetailRepository.find();
    }
    async findOneOrderMenuDetail(omde_id) {
        const result = await this.orderMenuDetailRepository.findOne({
            where: {
                omdeId: omde_id,
            },
        });
        if (result) {
            return result;
        }
        throw new common_1.HttpException('Categori not Found', common_1.HttpStatus.NOT_FOUND);
    }
    async createOrderMenusDetail(data) {
        const result = await this.orderMenuDetailRepository.save({
            ormePrice: data.ormePrice,
            ormeQty: data.ormeQty,
            ormeSubtotal: data.ormeSubtotal,
            ormeDiscount: data.ormeDiscount,
            omdeOrme: data.omdeOrme,
            omdeReme: data.omdeReme,
        });
        return result;
    }
    async updateOrdeMenuDetail(id, data) {
        const result = await this.orderMenuDetailRepository.update({
            omdeId: id,
        }, {
            ormePrice: data.ormePrice,
            ormeQty: data.ormeQty,
            ormeSubtotal: data.ormeSubtotal,
            ormeDiscount: data.ormeDiscount,
            omdeOrme: data.omdeOrme,
            omdeReme: data.omdeReme,
        });
        return result + ' Sukses Mengupdate';
    }
    async deleteOrdeMenuDetail(id) {
        await this.orderMenuDetailRepository.delete({
            omdeId: id,
        });
        return 'Sukses Menghapus';
    }
};
OrderMenuDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(OrderMenuDetail_1.OrderMenuDetail)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], OrderMenuDetailService);
exports.OrderMenuDetailService = OrderMenuDetailService;
//# sourceMappingURL=order-menu-detail.service.js.map