import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      message: 'Bienvenido a la API de Location Chile',
      description:
        'Esta API proporciona información sobre regiones y comunas de Chile.',
      instructions:
        'Para obtener información sobre regiones y comunas, visite la documentación de la API',
      example: {
        'Buscar region': 'GET /api/v1/regions/name/{name}',
        'Buscar Comuna': 'GET /api/v1/communes/name/{name}',
      },
      documentation:
        'https://location-chile-production-8adb.up.railway.app/docs',
    };
  }
}
