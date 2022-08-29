import { Level } from '../enum/level';
export declare class Client {
    private static instance;
    private readonly server;
    constructor(server: string);
    private sendLog;
    private info;
    private error;
    private warn;
    /**
     * @description send a Log to the server
     * @param message
     * @param level
     */
    log(message: string, level?: Level): Promise<Response>;
}
