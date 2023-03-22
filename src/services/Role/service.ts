import { IRoleService } from "./interface";
import * as Kafka from "../../config/stream/kafka"
import { RoleTo } from '../../to/RoleTo';
import { ParametersError } from '../../config/error/index';
import Role from "../../models/Role.model";

/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleService: IRoleService = {

    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async create(role:RoleTo): Promise<RoleTo> {
        let roleModel = await Role.create(role);
        return roleModel;
    }


    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async del(id:number): Promise<void> {
        Role.destroy({
            where: {
                id:id
            }
        });
    }

}

export default RoleService;