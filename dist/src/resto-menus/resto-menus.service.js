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
exports.RestoMenusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const RestoMenus_1 = require("../../output/entities/RestoMenus");
let RestoMenusService = class RestoMenusService {
    constructor(restoMenusRepository) {
        this.restoMenusRepository = restoMenusRepository;
    }
    async findAll() {
        return this.restoMenusRepository.find({
            order: { remeId: 'ASC' },
        });
    }
    async findMany(pattern) {
        return await this.restoMenusRepository.find({
            where: { remeName: (0, typeorm_2.ILike)(`%${pattern}%`) },
        });
    }
    async findOne(id) {
        const findOneOptions = {
            where: { remeId: Number(id) },
        };
        return this.restoMenusRepository.findOne(findOneOptions);
    }
    async create(restoMenu) {
        return this.restoMenusRepository.save(restoMenu);
    }
    async update(id, restoMenu) {
        return await this.restoMenusRepository.update(id, {
            remeName: restoMenu.remeName,
            remeDescription: restoMenu.remeDescription,
            remePrice: restoMenu.remePrice,
            remeType: restoMenu.remeType,
            remeStatus: restoMenu.remeStatus,
            remeModifiedDate: new Date(),
        });
    }
};
RestoMenusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(RestoMenus_1.RestoMenus)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RestoMenusService);
exports.RestoMenusService = RestoMenusService;
//# sourceMappingURL=resto-menus.service.js.map