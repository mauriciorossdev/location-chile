import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionsModule } from './regions/regions.module';
import { CommunesModule } from './communes/communes.module';

@Module({
  imports: [RegionsModule, CommunesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
