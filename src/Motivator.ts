import { MotivatorStorage, getMotivatorStorage } from "./MotivatorStorage";
import { IQuote, quotes } from './fixture/fixture';

export class Motivators {
  private storageService: MotivatorStorage;

  constructor() {
    this.storageService = getMotivatorStorage();
  }

  // 랜덤 인덱스를 생성하는 메서드
  private getRandomIndex(max: number): number {
    return Math.floor(Math.random() * max);
  }

  // 단일 명언을 랜덤하게 가져오기
  getOne(): IQuote | undefined {
    const randomIndex = this.getRandomIndex(quotes.length);
    return quotes[randomIndex];
  }

  // 모든 명언을 가져오기
  getAll(): IQuote[] {
    return quotes;
  }

  // 매일 새로운 랜덤 명언을 가져오기
  getDailyMotivator(): IQuote | undefined {
    const max = quotes.length;
    const currentTime = new Date().getTime();
    const nextResetTime = this.storageService.getStorage(this.storageService._mtvTimeKey) || 0;
    let dailyIndex = this.storageService.getStorage('dailyMotivatorIndex');

    if (currentTime >= nextResetTime || dailyIndex === null) {
      dailyIndex = this.getRandomIndex(max);
      this.storageService.setStorage('dailyMotivatorIndex', dailyIndex);
      this.storageService.setStorage('nextResetTime', this.storageService.getNextResetTime());
    }

    return quotes[dailyIndex];
  }
}
