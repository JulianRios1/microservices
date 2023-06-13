import { Module } from '@nestjs/common';
import { TaksServiceController } from './taks-service.controller';
import { TaksServiceService } from './taks-service.service';

@Module({
  imports: [],
  controllers: [TaksServiceController],
  providers: [TaksServiceService],
})
export class TaksServiceModule {}
