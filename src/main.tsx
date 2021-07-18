import { render } from "solid-js/web";
import { createSignal } from "solid-js";

import { useStore } from "./effector-solid";
import { $count, up, down } from "./model";

function Counter() {
  const count = useStore($count);

  return (
    <button type="button" onClick={() => up()}>
      {count()} times clicked!
    </button>
  );
}

function App() {
  const [v, setV] = createSignal(false);

  return (
    <div>
      <button onClick={() => setV((p) => !p)}>toggle</button>
      {v() ? <Counter /> : null}
      <button onClick={() => down()}>minus click!</button>
    </div>
  );
}

render(() => <App />, document.getElementById("app"));
