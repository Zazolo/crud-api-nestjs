import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColaService } from './cola.service';
import { CreateColaDto } from './dto/create-cola.dto';
import { UpdateColaDto } from './dto/update-cola.dto';

@Controller('cola')
export class ColaController {
  constructor(private readonly colaService: ColaService) {}

  @Post()
  create(@Body() createColaDto: CreateColaDto) {
    return this.colaService.createOrUpdate(createColaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colaService.remove(id);
  }

  @Get(':id')
  getSala(@Param('id') id:string){
    return this.colaService.getCola(id);
  }

  @Get('service/ip')
  async getIP(){
    return await this.colaService.getMyIP()
  }

}
