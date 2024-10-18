import { useSelector } from "react-redux"; // Import useSelector for accessing Redux store state
import { selectHistory } from "./transactionsSlice"; // Import selector for transaction history
import "./transactionHistory.scss"; // Import styles for TransactionHistory component

/** Displays a table row with transaction information */
const TransactionRow = ({ transaction: { type, amount, balance } }) => (
  <tr>
    <th scope="row">{type}</th> {/* Transaction type (e.g., deposit, withdrawal) */}
    <td>{amount.toFixed(2)}</td> {/* Amount formatted to 2 decimal places */}
    <td>{balance.toFixed(2)}</td> {/* Balance formatted to 2 decimal places */}
  </tr>
);

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  const history = useSelector(selectHistory); // Get the transaction history from the Redux store

  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the transactions in `history` to render the appropriate `TransactionRow`s */}
          {history.map((transaction, index) => (
            <TransactionRow key={index} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
