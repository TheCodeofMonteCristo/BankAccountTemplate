import { configureStore } from "@reduxjs/toolkit"; // Import Redux Toolkit for store configuration
import transactionsReducer from "../features/transactions/transactionsSlice"; // Import transactions slice reducer

/** 
 * Configures the Redux store with the transactions reducer.
 * The store holds the entire state of the application.
 */
const store = configureStore({
  reducer: {
    transactions: transactionsReducer, // Add transactions reducer to the store
  },
});

export default store; // Export the configured store
