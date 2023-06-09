import Users from '../../models/User.model';
import { UserTo } from '../../to/UserTo';
import UserService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await UserService.findAll();
}


/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function ifExistsUser(email:string): Promise<void> {
    return await UserService.ifExistsUser(email);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function create(user:UserTo): Promise<UserTo> {
    return await UserService.create(user);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function del(id:number): Promise<void> {
    return await UserService.del(id);
}