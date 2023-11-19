import { Controller, Get, Param } from '@nestjs/common';

import { RegionsService } from './regions.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('regions')
@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Get('name/:name')
  getRegionByName(@Param('name') name: string) {
    return this.regionsService.getRegionByName(name);
  }

  @Get('code/:code')
  getRegionByCode(@Param('code') code: string) {
    return this.regionsService.getRegionByCode(code);
  }
}
