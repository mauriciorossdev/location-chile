import { Injectable, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

interface Comuna {
  Codigo_Comuna: string;
  Nombre_Comuna: string;
  Codigo_Región: string;
}

interface Region {
  communes: Comuna[];
  NombreRegion: string;
  CodigoRegion: string;
}

@Injectable()
export class CommunesService implements OnModuleInit {
  private communes: any[] = [];

  onModuleInit() {
    this.loadCommunesData();
  }

  private loadCommunesData() {
    try {
      const filePath = path.join(
        __dirname,
        '../../data/regionandcommunes.json',
      );
      const rawData = fs.readFileSync(filePath, 'utf8');
      const regions: Region[] = JSON.parse(rawData);
      this.communes = regions.flatMap((region) => region.communes);
    } catch (error) {
      console.error('Error loading communes data:', error);
    }
  }

  getCommunesByRegionCode(code: string) {
    return this.communes.filter((comuna) => comuna.Codigo_Región === code);
  }

  getCommunesByRegionName(name: string) {
    return this.communes.filter((comuna) => comuna.Nombre_Region === name);
  }

  getCommuneByCode(code: string) {
    return this.communes.find((comuna) => comuna.Codigo_Comuna === code);
  }

  getCommuneByName(name: string) {
    return this.communes.find((comuna) => comuna.Nombre_Comuna === name);
  }
}
