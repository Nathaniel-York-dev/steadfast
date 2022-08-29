import { Server } from './stenographer/server'
import { Client } from './stenographer/client'

let exporter: any
console.log('process.env.NODE_ENV', process?.env?.NODE_ENV)
if (process?.env?.NODE_ENV) {
  exporter = { ...exporter, StenographerServer: Server }
} else {
  exporter = { ...exporter, StenographerClient: Client }
}
export default exporter
