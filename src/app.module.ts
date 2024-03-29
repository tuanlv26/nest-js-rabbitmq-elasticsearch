import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './user-module/user-module.module';
import { ProductModule } from './modules/products/product.module';

@Module({
  imports: [UserModuleModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
