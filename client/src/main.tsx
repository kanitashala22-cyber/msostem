import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./monaco-worker-setup";


createRoot(document.getElementById("root")!).render(<App />);
