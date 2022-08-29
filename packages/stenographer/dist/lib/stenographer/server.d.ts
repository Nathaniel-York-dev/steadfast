import { Payload } from '../entities/payload';
export declare class Server {
    private static instance;
    constructor();
    logMessage(payload: Payload): Promise<void>;
}
