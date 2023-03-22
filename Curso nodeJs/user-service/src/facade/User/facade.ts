import { UserService } from "../../services";
import { IUserFacade } from "./interface";
import { UserTo } from '../../to/UserTo';
import * as Kafka from '../../config/stream/kafka';

/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {

        let User = await UserService.findAll();
        return User;
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async create(user:UserTo): Promise<UserTo> {
        await UserService.ifExistsUser(user.email);
        let userResponse:UserTo = await UserService.create(user);
        return userResponse;
    },

    // //4
    // /**
    //  * @returns {Promise < any[] >}
    //  * @memberof UserFacade
    //  */
    // async create(user:UserTo): Promise<UserTo> {
    //     await UserService.validarEmail(user.email);
    //     await UserService.ifExistsUser(user.email);
    //     let userResponse:UserTo = await UserService.create(user);
    //     return userResponse;
    // }

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async publish(id:number): Promise<void> {
        await Kafka.send('user-service-topic', `${id}`);
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async consumer(id:number): Promise<void> {
        await UserService.del(id);
    }

}

export default UserFacade;