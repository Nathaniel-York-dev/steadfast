import { Levels } from '../enum/levels'

export interface Payload {
  time: string;
  instance: string;
  path: string;
  level: Levels;
  message: string;
}
