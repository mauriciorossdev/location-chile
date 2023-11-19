import { Injectable, OnModuleInit } from '@nestjs/common';
// import { CreateRegionDto } from './dto/create-region.dto';
// import { UpdateRegionDto } from './dto/update-region.dto';
import * as fs from 'fs';
import * as path from 'path';

export interface Comuna {
  Codigo_Comuna: string;
  Nombre_Comuna: string;
  Codigo_Region: string;
}

export interface Region {
  communes: Comuna[];
  NombreRegion: string;
  CodigoRegion: string;
}

@Injectable()
export class RegionsService implements OnModuleInit {
  private regions: Region[] = [];

  onModuleInit() {
    this.loadRegionsData();
  }

  private loadRegionsData() {
    const filePath = path.join(__dirname, '../../data/regionandcommunes.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    this.regions = JSON.parse(rawData);
  }

  getRegionByName(name: string): Region | undefined {
    return this.regions.find((region) => region.NombreRegion === name);
  }

  getRegionByCode(code: string): Region | undefined {
    return this.regions.find((region) => region.CodigoRegion === code);
  }
}
