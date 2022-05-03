"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import * as UserService from '../components/User';
var UserRouter = express_1.default.Router();
// UserRouter.get('/incidents', UserService.findAll);
// UserRouter.get('/incidents/:id', UserService.findOne);
// UserRouter.delete('/incidents/:id', UserService.deleteOne);
// UserRouter.post('/incidents/category', UserService.findCategory);
// UserRouter.post('/incidents/new', UserService.create);
exports.default = UserRouter;
