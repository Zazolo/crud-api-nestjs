/* eslint-disable import/first */
require('dotenv').config();


import { Injectable } from '@nestjs/common';
import knex, { Knex } from 'knex';


@Injectable()
export class DatabaseService {

    private static instance:DatabaseService = undefined;
    private connection:Knex = undefined;

    private constructor(){
        this.startKnex();
        console.log('Conexão com o banco de dados...');

    }

    public static getInstance(): DatabaseService {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService();
        }

        return DatabaseService.instance;
    }

    private async startKnex(){
        this.connection = knex({
            client: 'mysql',
            connection: {
                host : process.env.DB_HOST,
                user : process.env.DB_USER,
                password : process.env.DB_PWD,
                database : process.env.DB_DBNAME,
                insecureAuth:true
            }
        })
    }

    public getConnection():Knex {
        return this.connection
    }

   


    
}
