import { createSignal, onCleanup, onMount } from "solid-js";
import { Store } from "effector";

export const useStore = <T>(store: Store<T>) => {
  const [v, update] = createSignal<T>(store.getState());

  const unwatch = store.watch<T>((next) => {
    return update(() => next);
  });

  onCleanup(() => {
    unwatch();
    console.log("UNSUBSCRIBED!");
  });

  console.log("SUBSCRIBED!");

  return v;
};
