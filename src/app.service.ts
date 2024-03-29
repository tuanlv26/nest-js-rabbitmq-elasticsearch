import { Injectable } from '@nestjs/common';
let count: number = 1;
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World ' + count + count++;
  }
}
