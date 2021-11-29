import { Module } from '@nestjs/common';
import { ColaService } from './cola.service';
import { ColaController } from './cola.controller';

@Module({
  controllers: [ColaController],
  providers: [ColaService]
})
export class ColaModule {}
