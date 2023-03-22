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
const facade_1 = __importDefault(require("../../src/facade/Role/facade"));
const database_1 = require("../../src/config/connection/database");
const index_1 = require("../../src/config/error/index");
describe('RoleFacade Test', () => {
    before('Init', () => __awaiter(void 0, void 0, void 0, function* () {
        yield database_1.db.sync({ force: true });
    }));
    describe('Create', () => {
        it('should return one role', () => __awaiter(void 0, void 0, void 0, function* () {
            let roleTo = {
                name: "Admin"
            };
            const role = yield facade_1.default.create(roleTo);
            (0, chai_1.expect)(role.id).to.not.be.null;
        }));
    });
    describe('Create Error atributes required', () => {
        it('should return error -> attributes required', () => __awaiter(void 0, void 0, void 0, function* () {
            let roleTo = {};
            try {
                yield facade_1.default.create(roleTo);
            }
            catch (error) {
                (0, chai_1.expect)(error).instanceOf(index_1.ParametersError);
                (0, chai_1.expect)(error.message).equals("El atributo name es requerido");
            }
        }));
    });
});
//# sourceMappingURL=RoleFacade.test.js.map