import { Router } from 'express';
import { RoleFacade } from '../facade';
import { logger } from '../config/logger/logger';

/**
 * @constant {express.Router}
 */
const router: Router = Router();


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
router.post('', RoleFacade.create);


/**
 * DELETE method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles/{id}/id:
 *  delete:
 *    description: Create Roles
 *    tags: ["Roles"]
 *    parameters : [
 *      {
 *          name: 'id',
 *          in: 'path',
 *          schema: {
 *              type: 'number',
 *              example: 1
 *          },
 *          required: true
 *      }
 *    ]
 *    responses:
 *      200:
 *        description: All Roles
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.delete('/:id/id', RoleFacade.publish);



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
router.get('/ping', async (req, res) => {
    logger.info("(%s) - Request accepted: %s", "RoleRouter.ts", '');
    res.send('pong');
    logger.info("(%s) - Sending Response: %s", "RoleRouter.ts", { data: "pong" });
});

/**
 * @export {express.Router}
 */
export default router;