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
exports.RestoMenusController = void 0;
const common_1 = require("@nestjs/common");
const resto_menus_service_1 = require("./resto-menus.service");
const RestoMenus_1 = require("../../output/entities/RestoMenus");
let RestoMenusController = class RestoMenusController {
    constructor(restoMenusService) {
        this.restoMenusService = restoMenusService;
    }
    async findAll() {
        return this.restoMenusService.findAll();
    }
    async findOne(id) {
        return this.restoMenusService.findOne(id);
    }
    async create(restoMenu) {
        return this.restoMenusService.create(restoMenu);
    }
    async update(id, restoMenu) {
        return this.restoMenusService.update(id, restoMenu);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestoMenusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestoMenusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RestoMenus_1.RestoMenus]),
    __metadata("design:returntype", Promise)
], RestoMenusController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RestoMenusController.prototype, "update", null);
RestoMenusController = __decorate([
    (0, common_1.Controller)('resto-menus'),
    __metadata("design:paramtypes", [resto_menus_service_1.RestoMenusService])
], RestoMenusController);
exports.RestoMenusController = RestoMenusController;
//# sourceMappingURL=resto-menus.controller.js.map