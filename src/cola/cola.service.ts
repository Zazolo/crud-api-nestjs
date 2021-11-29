/* eslint-disable import/first */
const ip = require('ip');

import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { DatabaseService } from 'src/database.service';
import { CreateColaDto } from './dto/create-cola.dto';
import { UpdateColaDto } from './dto/update-cola.dto';
import { Cola } from './entities/cola.entity';

@Injectable()
export class ColaService {

  db:Knex = DatabaseService.getInstance().getConnection();

  async checkIfExists(id:string):Promise<boolean>{
    const cola = await this.db<Cola>('cola').where({id}).first();
    if(cola){
      return true;
    }
    return false;
  }

  async createOrUpdate(createColaDto: CreateColaDto) {
    const exists = await this.checkIfExists(createColaDto.id);
    if(exists){
      return await this.update(createColaDto.id, createColaDto.texto);
    }
    return await this.db('cola').insert(createColaDto);
  }

  update(id: string, texto: string) {
    return this.db('cola').update({texto}).where({id});
  }

  remove(id: string) {
    return this.db('cola').delete().where({id});
  }

  getCola(id:string):Promise<Cola>{
    return this.db<Cola>('cola').where({id}).first();
  }

  public async getMyIP():Promise<string>{
    return await ip.address();
  }

}
