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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = 'test';
const chai_1 = require("chai");
const facade_1 = __importDefault(require("../../src/facade/User/facade"));
const database_1 = require("../../src/config/connection/database");
const User_model_1 = __importDefault(require("../../src/models/User.model"));
const index_1 = require("../../src/config/error/index");
describe('UserFacade Test', () => {
    before('Init', () => __awaiter(void 0, void 0, void 0, function* () {
        yield database_1.db.sync({ force: true });
        User_model_1.default.create({
            id: 1,
            name: 'test',
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01'
        });
    }));
    describe('FindAll', () => {
        it('should return one user', () => __awaiter(void 0, void 0, void 0, function* () {
            const User = yield facade_1.default.findAll();
            (0, chai_1.expect)(1).equal(User.length);
        }));
    });
    //Prueba 2
    describe('Create', () => {
        it('should create one user', () => __awaiter(void 0, void 0, void 0, function* () {
            let userTo = {
                name: "Juan",
                email: "juan@axity.com"
            };
            const userCreated = yield facade_1.default.create(userTo);
            (0, chai_1.expect)(userCreated.email).equal("juan@axity.com");
        }));
    });
    //Prueba 3
    describe('Create Error', () => {
        it('should return error.', () => __awaiter(void 0, void 0, void 0, function* () {
            let userTo = {
                name: "Juan",
                email: "juan1@axity.com"
            };
            try {
                yield facade_1.default.create(userTo);
            }
            catch (error) {
                (0, chai_1.expect)(error).instanceOf(index_1.ParametersError);
            }
        }));
    });
    //Prueba 4
});
//# sourceMappingURL=UserFacade.test.js.map