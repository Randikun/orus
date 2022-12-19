import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): object {
    return {
      available: true,
    };
  }
}
