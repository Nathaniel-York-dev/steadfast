import { Levels } from '../enum/levels'
import { Payload } from '../entities/payload'

export class Client {
  // eslint-disable-next-line no-use-before-define
  private static instance: Client
  private readonly server!: string

  public constructor (server: string) {
    this.server = server
    if (!Client.instance) {
      Client.instance = this
    }
    return Client.instance
  }

  private sendLog (message: Payload, level: Levels) {
    return fetch(this.server, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ message, level })
    })
  }

  private info (message: Payload) {
    return this.sendLog(message, Levels.INFO)
  }

  private error (message: Payload) {
    return this.sendLog(message, Levels.ERROR)
  }

  private warn (message: Payload) {
    return this.sendLog(message, Levels.WARN)
  }

  /**
   * @description send a Log to the server
   * @param message
   * @param level
   */
  public log (message: string, level: Levels = Levels.INFO) {
    const payload: Payload = {
      time: new Date().toISOString(),
      instance: location.hostname,
      path: location.pathname,
      level,
      message
    }
    switch (level) {
      case Levels.ERROR:
        return this.error(payload)
      case Levels.WARN:
        return this.warn(payload)
      case Levels.INFO:
      default:
        return this.info(payload)
    }
  }
}
