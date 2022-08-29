import { Levels } from './enum/levels';
export declare class Stenographer {
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
    log(message: string, level?: Levels): Promise<Response>;
}
