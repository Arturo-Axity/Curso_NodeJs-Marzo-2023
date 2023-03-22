import { IUserService } from "./interface";
import User from "../../models/User.model";
import * as Kafka from "../../config/stream/kafka"
import Users from '../../models/User.model';
import { UserTo } from '../../to/UserTo';
import { ParametersError } from '../../config/error/index';

/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return User.findAll();
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async ifExistsUser(email:string): Promise<void> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        let user = await User.findAll({ where: {
            email: email
        }})

        if(user.length > 0) {
            throw new ParametersError("El usuario ya existe.")
        }
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async create(user:UserTo): Promise<UserTo> {
        let userModel = await User.create(user);
        return userModel;
    }//,

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

    
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async del(id:number): Promise<void> {
        User.destroy({
            where: {
                id:id
            }
        });
    }
}

export default UserService;