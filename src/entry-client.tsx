import { hydrate, render } from "preact";
import { App } from "./App";
import "./index.css";

const rootElement = document.getElementById("app");

if (rootElement) {
  const mount = rootElement.hasChildNodes() ? hydrate : render;
  mount(<App />, rootElement);
}
