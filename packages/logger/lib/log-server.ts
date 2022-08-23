import { promises as fs } from 'fs'
import { Payload } from './entities/payload'

export class LogServer {
  // eslint-disable-next-line no-use-before-define
  private static instance: LogServer
  constructor () {
    if (!LogServer.instance) {
      LogServer.instance = this
    }
    return LogServer.instance
  }

  public logMessage (payload: Payload) {
    return fs.writeFile('./logs/log.txt', JSON.stringify(payload))
  }
}
