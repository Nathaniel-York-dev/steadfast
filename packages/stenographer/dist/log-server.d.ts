import { Payload } from './entities/payload';
export declare class LogServer {
    private static instance;
    constructor();
    logMessage(payload: Payload): Promise<void>;
}
