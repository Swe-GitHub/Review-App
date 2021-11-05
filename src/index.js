import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { session } from "./api/session";
import { SessionProvider } from "./api/SessionContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SessionProvider value={session}>
      <App />
    </SessionProvider>
  </StrictMode>,
  rootElement
);
