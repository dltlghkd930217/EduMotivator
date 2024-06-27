export declare class MotivatorStorage {
    _mtvIndexKey: string;
    _mtvTimeKey: string;
    constructor();
    getCurrentMotivatorIndex(max: number): number;
    private initializeKeys;
    getNextResetTime(): number;
    getStorage(key: string): number | null;
    setStorage(key: string, value: number): void;
}
export declare function getMotivatorStorage(): MotivatorStorage;
