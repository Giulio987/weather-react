import { CSSProperties } from 'react';

export class CityWeather {
  constructor(
    readonly cityName: string,
    readonly mainWeather: string,
    readonly description: string,
    readonly temperature: number,
    public image: string,
    public style: CSSProperties
  ) {}
}
