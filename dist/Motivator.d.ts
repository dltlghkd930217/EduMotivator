import { IQuote } from './fixture/fixture';

export declare class Motivators {
    private storageService;
    constructor();
    private getRandomIndex;
    getOne(): IQuote | undefined;
    getAll(): IQuote[];
    getDailyMotivator(): IQuote | undefined;
}
