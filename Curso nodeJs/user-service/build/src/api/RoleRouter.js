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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facade_1 = require("../facade");
const logger_1 = require("../config/logger/logger");
/**
 * @constant {express.Router}
 */
const router = (0, express_1.Router)();
/**
 * POST method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles/:
 *  post:
 *    description: Create Roles
 *    tags: ["Roles"]
 *    requestBody:
 *      description: object role
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoleTo'
 *    responses:
 *      200:
 *        description: All Roles
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.post('', facade_1.RoleFacade.create);
/**
 * GET method route
 * @example http://localhost:PORT/ping
 * @swagger
 * /ping/:
 *  get:
 *    description: Test service
 *    tags: ["Ping"]
 *    responses:
 *      200:
 *        description: Pong
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: pong
 */
router.get('/ping', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.logger.info("(%s) - Request accepted: %s", "RoleRouter.ts", '');
    res.send('pong');
    logger_1.logger.info("(%s) - Sending Response: %s", "RoleRouter.ts", { data: "pong" });
}));
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=RoleRouter.js.map