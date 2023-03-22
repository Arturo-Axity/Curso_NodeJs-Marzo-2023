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

export class UserTo {
    id?: number;
    name?: string;
    email: string;

    constructor(id: number, email: string) {
        this.id = id;
        this.email = email;
    }
}