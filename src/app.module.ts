import { Module } from '@nestjs/common';
import { ColaModule } from './cola/cola.module';

@Module({
  imports: [ColaModule],
})
export class AppModule {}
