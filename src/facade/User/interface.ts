import { UserTo } from '../../to/UserTo';

/**
 * @export
 * @interface IUserFacade
 */
export interface IUserFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<UserTo>}
     * @memberof IUserFacade
     */
    create(user: UserTo): Promise<UserTo>;

    /**
     * @returns {Promise<UserTo>}
     * @memberof IUserFacade
     */
    del(user: UserTo): Promise<UserTo>;
}