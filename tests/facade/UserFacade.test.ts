process.env.NODE_ENV = 'test'

import { expect } from "chai";
import UserFacade from '../../src/facade/User/facade';
import { db } from '../../src/config/connection/database';
import User from "../../src/models/User.model";
import * as Kafka from "../../src/config/stream/kafka";
import { UserTo } from '../../src/to/UserTo';
import { ParametersError } from '../../src/config/error/index';

describe('UserFacade Test', () => {

    before('Init', async () => {
        await db.sync({ force: true });
        User.create({
            id: 1,
            name: 'test',
            createdAt: '2020-01-01',
            updatedAt: '2020-01-01'
        });
    });

    describe('FindAll', () => {
        it('should return one user', async () => {
            const User: any[] = await UserFacade.findAll();
            expect(1).equal(User.length);
        });
    });


    //Prueba 2
    describe('Create', () => {
        it('should create one user', async () => {
            let userTo: UserTo = {
                name: "Juan",
                email: "juan@axity.com"
            }
            const userCreated: UserTo = await UserFacade.create(userTo);
            expect(userCreated.email).equal("juan@axity.com");
        });
    });

    //Prueba 3
    describe('Create Error', () => {
        it('should return error.', async () => {
            let userTo: UserTo = {
                name: "Juan",
                email: "juan1@axity.com"
            }
            try {
                await UserFacade.create(userTo);
            } catch (error) {
                expect(error).instanceOf(ParametersError);
            }
        });
    });

    //Prueba 4

});