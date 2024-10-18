import TransactionHistory from "../features/transactions/TransactionHistory"; // Import TransactionHistory component
import Transactions from "../features/transactions/Transactions"; // Import Transactions component
import { Provider } from "react-redux"; // Import Provider from React Redux
import store from "./store"; // Import Redux store configuration
import "./app.css"; // Import global styles

/** 
 * Main App component serves as the entry point for the application.
 * It wraps the application with the Redux Provider to make the store available to all components.
 */
export default function App() {
  return (
    <Provider store={store}> {/* Provide Redux store to the entire application */}
      <main>
        <h1>Bank Account</h1> {/* Main heading */}
        <Transactions /> {/* Component for handling transactions */}
        <TransactionHistory /> {/* Component for displaying transaction history */}
      </main>
    </Provider>
  );
}
