import { CSSProperties } from 'react';

export class CityWeather {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly mainWeather: string,
    readonly description: string,
    readonly temperature: number,
    readonly localeDate: string,
    readonly month: string,
    readonly localTime: string,
    public image: string,
    public style: CSSProperties
  ) {}
}
