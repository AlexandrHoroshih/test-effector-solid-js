import { createStore, createEvent } from "effector";

export const up = createEvent();
export const down = createEvent();
export const $count = createStore(0)
  .on(up, (s) => s + 1)
  .on(down, (s) => s - 1);
