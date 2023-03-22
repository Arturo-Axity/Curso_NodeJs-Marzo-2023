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
exports.create = exports.ifExistsUser = exports.findAll = void 0;
const service_1 = __importDefault(require("./service"));
/**
 * @export
 * @returns {Promise < any[] >}
 */
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield service_1.default.findAll();
    });
}
exports.findAll = findAll;
/**
 * @export
 * @returns {Promise < any[] >}
 */
function ifExistsUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield service_1.default.ifExistsUser(email);
    });
}
exports.ifExistsUser = ifExistsUser;
/**
 * @export
 * @returns {Promise < any[] >}
 */
function create(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield service_1.default.create(user);
    });
}
exports.create = create;
//# sourceMappingURL=index.js.map