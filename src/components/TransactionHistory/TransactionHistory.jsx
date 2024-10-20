import TableItem from './TableItem';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr className={css.tableMenu}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableItems}>
        <TableItem tableItems={items} />
      </tbody>
    </table>
  );
};

export default TransactionHistory;
