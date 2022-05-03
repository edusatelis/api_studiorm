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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __importDefault(require("../User/model"));
var validarcpf = require('validar-cpf');
var AuthService = {
    /**
     *
     * @param {IUserModel} body
     * @returns { Promise<IUserModel>}
     * Esta função cria um novo usuario
     */
    createUser: function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var user, query, cpf, saved, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        user = new model_1.default({
                            name: body.name,
                            email: body.email,
                            password: body.password,
                            cpf: body.cpf
                        });
                        return [4 /*yield*/, model_1.default.findOne({ email: body.email })];
                    case 1:
                        query = _a.sent();
                        if (query) {
                            throw new Error('Email já cadastrado');
                        }
                        return [4 /*yield*/, model_1.default.findOne({ cpf: body.cpf })];
                    case 2:
                        cpf = _a.sent();
                        //Caso ja esteja cadastrado!
                        if (cpf) {
                            throw new Error('CPF ja existe!');
                        }
                        //Verifica a veracidade do cpf
                        if (body.cpf == "11111111111" || body.cpf == "22222222222" ||
                            body.cpf == "33333333333" || body.cpf == "44444444444" ||
                            body.cpf == "55555555555" || body.cpf == "66666666666" ||
                            body.cpf == "77777777777" || body.cpf == "88888888888" ||
                            body.cpf == "99999999999" || body.cpf == "00000000000") {
                            throw new Error('O CPF informado é invalido.');
                        }
                        //utiliza uma API externa pra verificar se o cpf é valido.
                        if (validarcpf(body.cpf) == false) {
                            throw new Error('O CPF informado é invalido.');
                        }
                        return [4 /*yield*/, user.save()];
                    case 3:
                        saved = _a.sent();
                        return [2 /*return*/, saved];
                    case 4:
                        error_1 = _a.sent();
                        throw new Error(error_1); // Cria uma mensagem de erro
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    getUser: function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isMatched, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, model_1.default.findOne({
                                email: body.email
                            })];
                    case 1:
                        user = _b.sent();
                        // Caso o e-mail não esteja casastrado 
                        if (!user) {
                            throw new Error('E-mail inválido');
                        }
                        _a = user;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, user.comparePassword(body.password)];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        isMatched = _a;
                        // Se as senhas forem iguais retorna o usuario
                        if (isMatched) {
                            return [2 /*return*/, user];
                        }
                        // Caso a senha esteja errada
                        throw new Error('Senha inválida');
                    case 4:
                        error_2 = _b.sent();
                        throw new Error(error_2);
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
};
exports.default = AuthService;
