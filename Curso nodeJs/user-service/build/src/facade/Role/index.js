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
exports.create = void 0;
const facade_1 = __importDefault(require("./facade"));
const HttpStatusCode_1 = __importDefault(require("../../commons/constants/HttpStatusCode"));
const logger_1 = require("../../config/logger/logger");
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let roleRequest = Object.assign({}, req.body);
            logger_1.logger.info("(%s) - Request post: %s", "RoleRouter.ts", JSON.stringify(roleRequest));
            roleRequest = yield facade_1.default.create(roleRequest);
            res.status(HttpStatusCode_1.default.OK).json(roleRequest);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.create = create;
//# sourceMappingURL=index.js.map