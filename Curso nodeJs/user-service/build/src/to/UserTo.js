"use strict";
/**
 * @export
 * @class UserTo
 *
 * @swagger
 * components:
 *  schemas:
 *    UserTo:
 *      type: object
 *      properties:
 *        id:
 *          type: int
 *          description: User id
 *          example: 1
 *        name:
 *          type: string
 *          description: User name
 *          example: Pedro
 *        email:
 *          type: string
 *          description: User email
 *          example: pedro@axity.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTo = void 0;
class UserTo {
    constructor(id, email) {
        this.id = id;
        this.email = email;
    }
}
exports.UserTo = UserTo;
//# sourceMappingURL=UserTo.js.map