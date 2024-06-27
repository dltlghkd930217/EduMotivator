import { Motivators } from "./Motivator";

const motivator = () => {
  let instance: Motivators | null = null;

  if (instance) {
    return instance;
  }

  instance = new Motivators();

  return instance;
}

export const eduMotivator = motivator();