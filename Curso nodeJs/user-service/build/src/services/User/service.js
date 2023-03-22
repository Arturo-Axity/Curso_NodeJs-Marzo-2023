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
const User_model_1 = __importDefault(require("../../models/User.model"));
const index_1 = require("../../config/error/index");
/**
 * @export
 * @implements {IUserModelService}
 */
const UserService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            // Para enviar un mensaje a kafka
            // await Kafka.send("test", 'Hello');
            return User_model_1.default.findAll();
        });
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    ifExistsUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // Para enviar un mensaje a kafka
            // await Kafka.send("test", 'Hello');
            let user = yield User_model_1.default.findAll({ where: {
                    email: email
                } });
            if (user.length > 0) {
                throw new index_1.ParametersError("El usuario ya existe.");
            }
        });
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let userModel = yield User_model_1.default.create(user);
            return userModel;
        });
    } //,
    // // 4
    // /**
    //  * @returns {Promise < any[] >}
    //  * @memberof UserFacade
    //  */
    // async validarEmail(email:string): Promise<UserTo> {
    //     if (email == '') {
    //         throw new ParametersError("El correo es requerido");
    //     }
    // }
};
exports.default = UserService;
//# sourceMappingURL=service.js.map