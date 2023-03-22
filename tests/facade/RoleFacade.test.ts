process.env.NODE_ENV = 'test'

import { expect } from "chai";
import RoleFacade from '../../src/facade/Role/facade';
import { db } from '../../src/config/connection/database';
import * as Kafka from "../../src/config/stream/kafka";
import { RoleTo } from '../../src/to/RoleTo';
import { ParametersError } from '../../src/config/error/index';

describe('RoleFacade Test', () => {

    before('Init', async () => {
        await db.sync({ force: true });

    });

    describe('Create', () => {
        it('should return one role', async () => {
            let roleTo: RoleTo={
                name: "Admin"
            } 
            const role: RoleTo = await RoleFacade.create(roleTo);
            expect(role.id).to.not.be.null;
        });
    });


    describe('Create Error atributes required', () => {
        it('should return error -> attributes required', async () => {
            let roleTo: RoleTo = {
            }
            try {
                await RoleFacade.create(roleTo);
            } catch (error: any) {
                expect(error).instanceOf(ParametersError);
                expect(error.message).equals("El atributo name es requerido");
            }
        });
    });


});