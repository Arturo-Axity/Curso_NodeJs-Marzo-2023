import RoleFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';
import { RoleTo } from '../../to/RoleTo';
import { logger } from '../../config/logger/logger';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        let roleRequest: RoleTo = {...req.body};
        logger.info("(%s) - Request post: %s","RoleRouter.ts",JSON.stringify(roleRequest));
        roleRequest = await RoleFacade.create(roleRequest);
        res.status(HttpStatusCode.OK).json(roleRequest);
    } catch (error) {
        next(error);
    }
}



/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function publish(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const {
            params: { id }
        } = req
        logger.info("(%s) - Request delete: %s","RoleRouter.ts", id);
        await RoleFacade.publish(Number(id));
        res.status(HttpStatusCode.OK).json("");
    } catch (error) {
        next(error);
    }