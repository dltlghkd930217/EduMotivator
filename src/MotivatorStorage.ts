export class MotivatorStorage {
  _mtvIndexKey: string = 'Motivator_IndexKey';
  _mtvTimeKey: string = 'Motivator_TimeKey';

  constructor() {}

  getCurrentMotivatorIndex(max: number): number {
    const [currentIndex, nextResetTime] = this.initializeKeys();
    const currentTime = new Date().getTime();

    if (currentTime >= nextResetTime) {
      this.setStorage(this._mtvTimeKey, this.getNextResetTime());

      const nextIndex = currentIndex + 1;

      if (nextIndex < max) {
        this.setStorage(this._mtvIndexKey, nextIndex);
        return nextIndex;
      }

      this.setStorage(this._mtvIndexKey, 0);
      return 0;
    }

    return currentIndex;
  }

  private initializeKeys(): [number, number] {
    let index = this.getStorage(this._mtvIndexKey);
    let resetTime = this.getStorage(this._mtvTimeKey);

    if (index === null) {
      index = 0;
      this.setStorage(this._mtvIndexKey, 0);
    }

    if (resetTime === null) {
      resetTime = this.getNextResetTime();
      this.setStorage(this._mtvTimeKey, resetTime);
    }

    return [index, resetTime];
  }

  getNextResetTime(): number {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime();
  }

  getStorage(key: string): number | null {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value) as number;
      } catch (err) {
        console.error('Error parsing storage value', err);
        return null;
      }
    }
    return null;
  }

  setStorage(key: string, value: number): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

let motivatorInstance: MotivatorStorage | null = null;

export function getMotivatorStorage(): MotivatorStorage {
  if (motivatorInstance === null) {
    motivatorInstance = new MotivatorStorage();
  }
  return motivatorInstance;
}
