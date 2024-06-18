"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMusica = exports.updateMusica = exports.addMusica = exports.searchMusicas = exports.getMusicaById = exports.getMusicasPaginadas = exports.getMusicas = void 0;
var data_source_1 = require("../data-source");
var musica_1 = require("../models/musica");
var autor_1 = require("../models/autor");
var genero_1 = require("../models/genero");
var typeorm_1 = require("typeorm");
var getMusicas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var musicas, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(musica_1.Musica).find({
                        relations: ["autores", "genero"],
                    })];
            case 1:
                musicas = _a.sent();
                res.status(200).json(musicas);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                res.status(500).json({ message: "Erro ao buscar mpusicas" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getMusicas = getMusicas;
var getMusicasPaginadas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var ITEMS_PER_PAGE, page, skip, musicaRepository, _a, entities, total, totalPages, response, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                ITEMS_PER_PAGE = 10;
                page = parseInt(req.query.page) || 1;
                skip = (page - 1) * ITEMS_PER_PAGE;
                musicaRepository = data_source_1.AppDataSource.getRepository(musica_1.Musica);
                return [4 /*yield*/, musicaRepository.findAndCount({
                        skip: skip,
                        take: ITEMS_PER_PAGE,
                        relations: ["autores", "genero"],
                    })];
            case 1:
                _a = _b.sent(), entities = _a[0], total = _a[1];
                totalPages = Math.ceil(total / ITEMS_PER_PAGE);
                response = {
                    items: entities,
                    page: page,
                    totalPages: totalPages,
                    totalItems: total,
                };
                res.json(response);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).json({ message: "Erro ao buscar músicas" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getMusicasPaginadas = getMusicasPaginadas;
var getMusicaById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = +req.params.id;
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(musica_1.Musica).findOne({
                        where: { id: id },
                        relations: ["autores", "genero"],
                    })];
            case 1:
                results = _a.sent();
                if (results == null)
                    return [2 /*return*/, res.status(500).json({ message: "Música não encontrada" })];
                return [2 /*return*/, res.status(200).send(results)];
        }
    });
}); };
exports.getMusicaById = getMusicaById;
var searchMusicas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var parametro, musicasEncontradas, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                parametro = req.params.parametro;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(musica_1.Musica)
                        .createQueryBuilder("musica")
                        .leftJoinAndSelect("musica.autores", "autor")
                        .leftJoinAndSelect("musica.genero", "genero")
                        .where("musica.nome LIKE :parametro", { parametro: "%".concat(parametro, "%") })
                        .orWhere("autor.nome_autor LIKE :parametro", {
                        parametro: "%".concat(parametro, "%"),
                    })
                        .getMany()];
            case 2:
                musicasEncontradas = _a.sent();
                res.status(200).json(musicasEncontradas);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.error(err_2);
                res.status(500).json({ message: "Erro ao buscar músicas" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.searchMusicas = searchMusicas;
var addMusica = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nome, autores, generoId, duracao, descricao, link_cifra, link_video, album, link_letra, autoresExistentes, autorRepository, generoExistente, generoRepository, musica, musicaSalva, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, nome = _a.nome, autores = _a.autores, generoId = _a.generoId, duracao = _a.duracao, descricao = _a.descricao, link_cifra = _a.link_cifra, link_video = _a.link_video, album = _a.album, link_letra = _a.link_letra;
                if (!nome || !duracao) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ message: "Nome e duração são campos obrigatórios." })];
                }
                autoresExistentes = [];
                if (!(autores && autores.length > 0)) return [3 /*break*/, 2];
                autorRepository = data_source_1.AppDataSource.getRepository(autor_1.Autor);
                return [4 /*yield*/, autorRepository.find({
                        where: {
                            id: (0, typeorm_1.In)(autores),
                        },
                    })];
            case 1:
                autoresExistentes = _b.sent();
                if (autoresExistentes.length !== autores.length) {
                    return [2 /*return*/, res.status(400).json({
                            message: "Pelo menos um dos autores especificados não existe.",
                        })];
                }
                _b.label = 2;
            case 2:
                generoExistente = undefined;
                if (!generoId) return [3 /*break*/, 4];
                generoRepository = data_source_1.AppDataSource.getRepository(genero_1.Genero);
                return [4 /*yield*/, generoRepository.findOneBy({
                        id: generoId,
                    })];
            case 3:
                generoExistente = _b.sent();
                if (!generoExistente) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ message: "O gênero especificado não existe." })];
                }
                _b.label = 4;
            case 4:
                musica = new musica_1.Musica();
                musica.nome = nome;
                musica.autores = autoresExistentes;
                musica.genero = generoExistente;
                musica.duracao = duracao;
                musica.descricao = descricao;
                musica.link_cifra = link_cifra;
                musica.link_video = link_video;
                musica.album = album;
                musica.link_letra = link_letra;
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(musica_1.Musica).save(musica)];
            case 5:
                musicaSalva = _b.sent();
                res.status(201).json(musicaSalva);
                return [3 /*break*/, 7];
            case 6:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).json({ message: "Erro ao criar música." });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.addMusica = addMusica;
var updateMusica = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, musicaRepository, musica, _a, nome, autores, genero, duracao, descricao, link_cifra, link_video, album, link_letra, autoresExistentes, generoExistente, musicaAtualizada, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                id = +req.params.id;
                musicaRepository = data_source_1.AppDataSource.getRepository(musica_1.Musica);
                return [4 /*yield*/, musicaRepository.findOne({
                        where: { id: id },
                        relations: ["autores", "genero"],
                    })];
            case 1:
                musica = _b.sent();
                if (!musica) {
                    return [2 /*return*/, res.status(404).json({ message: "Música não encontrada" })];
                }
                _a = req.body, nome = _a.nome, autores = _a.autores, genero = _a.genero, duracao = _a.duracao, descricao = _a.descricao, link_cifra = _a.link_cifra, link_video = _a.link_video, album = _a.album, link_letra = _a.link_letra;
                autoresExistentes = [];
                if (!(autores && autores.length > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(autor_1.Autor).find({
                        where: {
                            id: (0, typeorm_1.In)(autores),
                        },
                    })];
            case 2:
                autoresExistentes = _b.sent();
                if (autoresExistentes.length !== autores.length) {
                    return [2 /*return*/, res.status(400).json({
                            message: "Pelo menos um dos autores especificados não existe.",
                        })];
                }
                _b.label = 3;
            case 3:
                generoExistente = undefined;
                if (!genero) return [3 /*break*/, 5];
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(genero_1.Genero).findOne({
                        where: { id: genero },
                    })];
            case 4:
                generoExistente = _b.sent();
                if (!generoExistente) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ message: "O gênero especificado não existe." })];
                }
                _b.label = 5;
            case 5:
                musica.nome = nome !== null && nome !== void 0 ? nome : musica.nome;
                musica.autores =
                    autoresExistentes.length > 0 ? autoresExistentes : musica.autores;
                musica.genero = generoExistente !== null && generoExistente !== void 0 ? generoExistente : musica.genero;
                musica.duracao = duracao !== null && duracao !== void 0 ? duracao : musica.duracao;
                musica.descricao = descricao !== null && descricao !== void 0 ? descricao : musica.descricao;
                musica.link_cifra = link_cifra !== null && link_cifra !== void 0 ? link_cifra : musica.link_cifra;
                musica.link_video = link_video !== null && link_video !== void 0 ? link_video : musica.link_video;
                musica.album = album !== null && album !== void 0 ? album : musica.album;
                musica.link_letra = link_letra !== null && link_letra !== void 0 ? link_letra : musica.link_letra;
                return [4 /*yield*/, musicaRepository.save(musica)];
            case 6:
                musicaAtualizada = _b.sent();
                return [2 /*return*/, res.status(200).json(musicaAtualizada)];
            case 7:
                error_3 = _b.sent();
                console.error(error_3);
                return [2 /*return*/, res.status(500).json({ message: "Erro ao atualizar música" })];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.updateMusica = updateMusica;
var deleteMusica = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = +req.params.id;
                return [4 /*yield*/, data_source_1.AppDataSource.getRepository(musica_1.Musica).delete(id)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.send(results)];
        }
    });
}); };
exports.deleteMusica = deleteMusica;
//# sourceMappingURL=musica.js.map