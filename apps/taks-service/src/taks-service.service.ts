import { Injectable } from '@nestjs/common';

@Injectable()
export class TaksServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
