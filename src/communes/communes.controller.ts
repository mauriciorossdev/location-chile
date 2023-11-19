import { Controller, Get, Param } from '@nestjs/common';
import { CommunesService } from './communes.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('communes')
@Controller('communes')
export class CommunesController {
  constructor(private readonly communesService: CommunesService) {}

  @Get('code/:code')
  getCommuneByCode(@Param('code') code: string) {
    return this.communesService.getCommuneByCode(code);
  }

  @Get('name/:name')
  getCommuneByName(@Param('name') name: string) {
    return this.communesService.getCommuneByName(name);
  }

  @Get('region/code/:code')
  getCommunesByRegionCode(@Param('code') code: string) {
    return this.communesService.getCommunesByRegionCode(code);
  }

  @Get('region/name/:name')
  getCommunesByRegionName(@Param('name') name: string) {
    return this.communesService.getCommunesByRegionName(name);
  }
}
