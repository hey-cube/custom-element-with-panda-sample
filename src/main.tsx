import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import styles from "./index.css?url";

class MyElement extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const root = createRoot(shadow);
    root.render(
      <StrictMode>
        <link rel="stylesheet" href={styles} />
        <App />
      </StrictMode>
    );
  }
}

customElements.define("my-element", MyElement);
