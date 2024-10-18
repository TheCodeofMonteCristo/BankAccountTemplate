import { createSlice } from "@reduxjs/toolkit";

/**
 * Each transaction is recorded as an object with the following properties.
 * @typedef Transaction
 * @property {"deposit"|"withdrawal"|"transfer/[name]"} type
 * @property {number} amount
 * @property {number} balance - The balance after the transaction is completed.
 */

/** 
 * Set initial state with a balance of 0 and an empty array of transactions.
 * @type {{balance: number, history: Transaction[]}}
 */
const initialState = {
  balance: 0, // Initial balance set to 0
  history: [], // History of transactions starts empty
};

/**
 * Create a slice of the Redux store for managing transactions.
 * It contains reducers to handle deposit, withdrawal, and transfer actions.
 */
const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    deposit: (state, { payload }) => {
      state.balance += payload.amount; // Increase balance by the deposit amount
      state.history.push({
        type: "deposit",
        amount: payload.amount,
        balance: state.balance,
      }); // Record the transaction
    },
    withdrawal: (state, { payload }) => {
      state.balance -= payload.amount; // Decrease balance by the withdrawal amount
      state.history.push({
        type: "withdrawal",
        amount: payload.amount,
        balance: state.balance,
      }); // Record the transaction
    },
    transfer: (state, { payload }) => {
      state.balance -= payload.amount; // Decrease balance by the transfer amount
      state.history.push({
        type: `transfer/${payload.recipient}`,
        amount: payload.amount,
        balance: state.balance,
      }); // Record the transaction with the recipient's name
    },
  },
});

// Export actions and selectors for use in components
export const { deposit, withdrawal, transfer } = transactionsSlice.actions;
export const selectBalance = (state) => state.transactions.balance; // Selector for balance
export const selectHistory = (state) => state.transactions.history; // Selector for transaction history

export default transactionsSlice.reducer; // Export the reducer for the slice
