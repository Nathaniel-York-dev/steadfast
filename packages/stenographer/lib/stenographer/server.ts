import { promises as fs } from 'fs'
import { Payload } from '../entities/payload'

export class Server {
  // eslint-disable-next-line no-use-before-define
  private static instance: Server
  constructor () {
    if (!Server.instance) {
      Server.instance = this
    }
    return Server.instance
  }

  public logMessage (payload: Payload) {
    return fs.writeFile('./logs/log.txt', JSON.stringify(payload))
  }
}
