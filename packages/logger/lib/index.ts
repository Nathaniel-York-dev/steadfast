import { LogServer } from './log-server'
import { Logger } from './logger'

let exporter: any
console.log('process.env.NODE_ENV', process?.env?.NODE_ENV)
if (process?.env?.NODE_ENV) {
  exporter = { ...exporter, LogServer }
} else {
  exporter = { ...exporter, Logger }
}
export default exporter
