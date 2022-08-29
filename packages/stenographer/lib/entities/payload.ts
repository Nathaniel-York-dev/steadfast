import { Level } from '../enum/level'

export interface Payload {
  time: string;
  instance: string;
  path: string;
  level: Level;
  message: string;
}
