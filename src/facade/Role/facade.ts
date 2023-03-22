import { RoleService } from "../../services";
import { IRoleFacade } from "./interface";
import { RoleTo } from '../../to/RoleTo';


/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleFacade: IRoleFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async create(role:RoleTo): Promise<RoleTo> {
        let roleResponse:RoleTo = await RoleService.create(role);
        return roleResponse;
    },




    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async publish(id:number): Promise<void> {
        await Kafka.send('role-service-topic', `${id}`);
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async consumer(id:number): Promise<void> {
        await RoleService.del(id);
    }


}

export default RoleFacade;