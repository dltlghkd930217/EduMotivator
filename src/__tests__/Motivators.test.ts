import { quotes } from "../fixture/fixture";
import { Motivators } from "../Motivator";

// 로컬 스토리지 모킹
class LocalStorageMock {
  private store: { [key: string]: string } = {};

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = value;
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock() as any;

describe('Motivators', () => {
  let motivators: Motivators;

  beforeEach(() => {
    motivators = new Motivators();
    localStorage.clear();
  });

  test('getOne()은 랜덤한 명언을 리턴해야한다.', () => {
    const quote = motivators.getOne();
    expect(quotes).toContainEqual(quote);
  });

  test('getAll()은 모든 명언을 리턴해야 한다.', () => {
    const allQuotes = motivators.getAll();
    expect(allQuotes).toEqual(quotes);
  });

  test('getDailyMotivator()는 명언 1개를 가지고 오고 여러번 가지고 오더라도 동일한 명언을 가지고 와야한다.', () => {
    const dailyQuote1 = motivators.getDailyMotivator();
    const dailyQuote2 = motivators.getDailyMotivator();
    expect(dailyQuote1).toEqual(dailyQuote2);

    // 시간을 미래로 변경하여 새로운 랜덤 인덱스를 생성하도록 함
    const futureTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    jest.spyOn(global.Date, 'now').mockImplementationOnce(() => futureTime);

    const dailyQuote3 = motivators.getDailyMotivator();
    expect(dailyQuote3).not.toEqual(dailyQuote1);
  });
});
