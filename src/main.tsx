import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { APP_INFO } from "./data/data";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App {...APP_INFO} />
    </React.StrictMode>
);
