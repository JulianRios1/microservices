import { Controller, Get } from '@nestjs/common';
import { TaksServiceService } from './taks-service.service';

@Controller()
export class TaksServiceController {
  constructor(private readonly taksServiceService: TaksServiceService) {}

  @Get()
  getHello(): string {
    return this.taksServiceService.getHello();
  }
}
