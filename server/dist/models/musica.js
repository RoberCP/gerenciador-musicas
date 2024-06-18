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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Musica = void 0;
var typeorm_1 = require("typeorm");
var autor_1 = require("./autor");
var genero_1 = require("./genero");
var Musica = /** @class */ (function () {
    function Musica() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Musica.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Musica.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return autor_1.Autor; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Musica.prototype, "autores", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return genero_1.Genero; }),
        __metadata("design:type", genero_1.Genero)
    ], Musica.prototype, "genero", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Musica.prototype, "duracao", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Musica.prototype, "descricao", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Musica.prototype, "link_cifra", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Musica.prototype, "link_video", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Musica.prototype, "album", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Musica.prototype, "link_letra", void 0);
    Musica = __decorate([
        (0, typeorm_1.Entity)()
    ], Musica);
    return Musica;
}());
exports.Musica = Musica;
//# sourceMappingURL=musica.js.map