import ReactDOM from "react-dom/client"; // Import React DOM for rendering
import App from "./app/App"; // Import the main App component
import "./index.css"; // Import global styles

/**
 * Create a root for the React application and render the App component.
 * This serves as the entry point for the entire application.
 */
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
