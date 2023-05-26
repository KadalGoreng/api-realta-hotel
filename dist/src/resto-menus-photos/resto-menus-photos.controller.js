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
exports.RestoMenuPhotosController = void 0;
const common_1 = require("@nestjs/common");
const resto_menus_photos_service_1 = require("../../src/resto-menus-photos/resto-menus-photos.service");
let RestoMenuPhotosController = class RestoMenuPhotosController {
    constructor(restoMenuPhotosService) {
        this.restoMenuPhotosService = restoMenuPhotosService;
    }
    findAllRestoMenuPhotos() {
        return this.restoMenuPhotosService.findAllRestoMenuPhotos();
    }
    findOneRestoMenuPhotos(params) {
        return this.restoMenuPhotosService.findOneRestoMenuPhotos(params.id);
    }
    createRestoMenuPhotos(body) {
        return this.restoMenuPhotosService.createRestoMenusPhotos(body);
    }
    updateRestoMenuPhotos(params, body) {
        return this.restoMenuPhotosService.updateRestoMenuPhotos(params.id, body);
    }
    deleteRestoMenuPhotos(id) {
        return this.restoMenuPhotosService.deleteRestoMenuPhotos(id.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestoMenuPhotosController.prototype, "findAllRestoMenuPhotos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestoMenuPhotosController.prototype, "findOneRestoMenuPhotos", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestoMenuPhotosController.prototype, "createRestoMenuPhotos", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], RestoMenuPhotosController.prototype, "updateRestoMenuPhotos", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], RestoMenuPhotosController.prototype, "deleteRestoMenuPhotos", null);
RestoMenuPhotosController = __decorate([
    (0, common_1.Controller)('resto-menu-photos'),
    __metadata("design:paramtypes", [resto_menus_photos_service_1.RestoMenuPhotosService])
], RestoMenuPhotosController);
exports.RestoMenuPhotosController = RestoMenuPhotosController;
//# sourceMappingURL=resto-menus-photos.controller.js.map