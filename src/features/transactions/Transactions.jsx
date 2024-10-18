import { useState } from "react"; // Import useState for managing local state
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch for dispatching actions and useSelector for accessing store state
import { deposit, withdrawal, transfer, selectBalance } from "./transactionsSlice"; // Import transaction actions and selectors
import "./transactions.scss"; // Import styles for Transactions component

/**
 * Allows users to deposit to, withdraw from, and transfer money from their account.
 */
export default function Transactions() {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const balance = useSelector(selectBalance); // Get the current balance from the Redux store

  const [amountStr, setAmountStr] = useState("0.00"); // State for the amount input
  const [recipient, setRecipient] = useState(""); // State for the recipient input

  /** Dispatches a transaction action based on the form submission. */
  const onTransaction = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Determine which button was clicked (deposit, withdraw, or transfer)
    const action = e.nativeEvent.submitter.name; // Get the button name from the event

    const amount = +amountStr; // Convert the amount input to a number

    // Dispatch the appropriate transaction action based on `action`
    if (action === "deposit") {
      dispatch(deposit({ amount })); // Dispatch deposit action
    } else if (action === "withdraw") {
      dispatch(withdrawal({ amount })); // Dispatch withdrawal action
    } else if (action === "transfer") {
      dispatch(transfer({ amount, recipient })); // Dispatch transfer action with recipient info
    }
  };

  return (
    <section className="transactions container">
      <h2>Transactions</h2>
      <figure>
        <figcaption>Current Balance &nbsp;</figcaption>
        <strong>${balance.toFixed(2)}</strong> {/* Display current balance */}
      </figure>

      <form onSubmit={onTransaction} className="transaction-form">
        <div className="form-row">
          <input
            type="number"
            min="0"
            step="0.01"
            value={amountStr}
            onChange={(e) => setAmountStr(e.target.value)} // Update amount state
            placeholder="Amount"
            required
          />
          <button type="submit" name="deposit">Deposit</button> {/* Deposit button */}
          <button type="submit" name="withdraw">Withdraw</button> {/* Withdraw button */}
        </div>
        <div className="form-row">
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)} // Update recipient state
            placeholder="Recipient's Name"
            required
          />
          <button type="submit" name="transfer">Transfer</button> {/* Transfer button */}
        </div>
      </form>
    </section>
  );
}
