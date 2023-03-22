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
const services_1 = require("../../services");
/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let Role = yield services_1.RoleService.findAll();
            return Role;
        });
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    create(role) {
        return __awaiter(this, void 0, void 0, function* () {
            yield services_1.RoleService.ifExistsRole(role.email);
            let roleResponse = yield services_1.RoleService.create(role);
            return roleResponse;
        });
    },
    // //4
    // /**
    //  * @returns {Promise < any[] >}
    //  * @memberof RoleFacade
    //  */
    // async create(role:RoleTo): Promise<RoleTo> {
    //     await RoleService.validarEmail(role.email);
    //     await RoleService.ifExistsRole(role.email);
    //     let roleResponse:RoleTo = await RoleService.create(role);
    //     return roleResponse;
    // }
};
exports.default = RoleFacade;
//# sourceMappingURL=facade.js.map