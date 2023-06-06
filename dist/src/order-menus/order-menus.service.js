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
exports.OrderMenusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const OrderMenus_1 = require("../../output/entities/OrderMenus");
const typeorm_2 = require("typeorm");
const OrderMenuDetail_1 = require("../../output/entities/OrderMenuDetail");
let OrderMenusService = class OrderMenusService {
    constructor(orderMenusRepository, orderMenuDetailRepository) {
        this.orderMenusRepository = orderMenusRepository;
        this.orderMenuDetailRepository = orderMenuDetailRepository;
    }
    async findAllOrderMenus() {
        return await this.orderMenusRepository.find();
    }
    async findOneOrderMenus(orme_id) {
        const order_menu = await this.orderMenusRepository.findOne({
            where: {
                ormeId: orme_id,
            },
        });
        const order_menu_detail = await this.orderMenuDetailRepository
            .createQueryBuilder('order_menu_detail')
            .leftJoinAndSelect('order_menu_detail.omdeReme', 'resto_menus')
            .where('order_menu_detail.omde_orme_id = :prefix', {
            prefix: order_menu.ormeId,
        })
            .getMany();
        const result = { order_menu, order_menu_detail };
        if (result) {
            return result;
        }
        throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
    }
    async generateUniqueOrderNumber() {
        const currentDate = new Date();
        const year = currentDate.getFullYear().toString().substr(-2);
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const orderNumberPrefix = `FO-${year}${month}${day}`;
        const latestOrderNumber = await this.orderMenusRepository
            .createQueryBuilder('order_menus')
            .select('MAX(order_menus.ormeOrderNumber)', 'maxOrderNumber')
            .where('order_menus.ormeOrderNumber LIKE :prefix', {
            prefix: `${orderNumberPrefix}%`,
        })
            .getRawOne();
        let orderNumberCounter = 1;
        if (latestOrderNumber && latestOrderNumber.maxOrderNumber) {
            const latestCounter = parseInt(latestOrderNumber.maxOrderNumber.substr(-3), 10);
            if (!isNaN(latestCounter)) {
                orderNumberCounter = latestCounter + 1;
            }
        }
        const paddedCounter = orderNumberCounter.toString().padStart(3, '0');
        const uniqueOrderNumber = `${orderNumberPrefix}-${paddedCounter}`;
        return uniqueOrderNumber;
    }
    async createOrderMenus(data) {
        const orderNumber = await this.generateUniqueOrderNumber();
        const orderTotalAmount = await this.orderMenuDetailRepository.findOneBy({
            omdeId: data.orderDetails[0],
        });
        const date = new Date();
        const result = await this.orderMenusRepository.save({
            ormeOrderNumber: orderNumber,
            ormeOrderDate: date,
            ormeTotalItem: data.ormeTotalItem,
            ormeTotalDiscount: data.ormeTotalDiscount,
            ormeTotalAmount: orderTotalAmount.ormeSubtotal,
            ormePayType: data.ormePayType,
            ormeCardnumber: data.ormeCardnumber,
            ormeIsPaid: data.ormeIsPaid,
            ormeModifiedDate: date,
            ormeUser: data.ormeUserId,
        });
        const ormeId = result.ormeId;
        data.orderDetails.forEach(async (element) => {
            await this.orderMenuDetailRepository.update({ omdeId: element }, {
                omdeOrme: ormeId,
            });
        });
        return result;
    }
    async updateOrderMenus(id, data) {
        const date = new Date();
        const result = await this.orderMenusRepository.update({
            ormeId: id,
        }, {
            ormeOrderNumber: data.ormeOrderNumber,
            ormeOrderDate: data.ormeOrderDate,
            ormeTotalItem: data.ormeTotalItem,
            ormeTotalDiscount: data.ormeTotalDiscount,
            ormeTotalAmount: data.ormeTotalAmount,
            ormePayType: data.ormePayType,
            ormeCardnumber: data.ormeCardnumber,
            ormeIsPaid: 'Y',
            ormeModifiedDate: date,
            ormeUserId: data.ormeUserId,
        });
        return result + ' Sukses Mengupdate';
    }
    async deleteOrderMenus(id) {
        await this.orderMenusRepository.delete({
            ormeId: id,
        });
        return 'Sukses Menghapus';
    }
    async findLastOrder() {
        return await this.orderMenusRepository.query('SELECT * FROM resto.order_menus ORDER BY orme_id DESC LIMIT 1');
    }
    async getIdLast() {
        return await this.orderMenusRepository.query('SELECT orme_id FROM resto.order_menus ORDER BY orme_id DESC LIMIT 1');
    }
};
OrderMenusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(OrderMenus_1.OrderMenus)),
    __param(1, (0, typeorm_1.InjectRepository)(OrderMenuDetail_1.OrderMenuDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], OrderMenusService);
exports.OrderMenusService = OrderMenusService;
//# sourceMappingURL=order-menus.service.js.map