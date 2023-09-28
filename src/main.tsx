import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LinkProvider } from "@/context/LinkContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <LinkProvider>
    <App />
  </LinkProvider>
);
