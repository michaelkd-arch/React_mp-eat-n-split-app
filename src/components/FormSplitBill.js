export default function FormSplitBill({
  friend,
  bill,
  onBill,
  expense,
  onExpense,
  friendExpense,
  whoIsPaying,
  onPaying,
  onSplitBill,
  onSplitOpen,
}) {
  return (
    <div className="formsplitbill">
      <form onSubmit={(e) => onSplitBill(e)}>
        <h2
          className="formsplitbill__title"
          style={{ textTransform: "uppercase" }}
        >
          SPLIT A BILL WITH {friend?.name}
        </h2>
        <div className="form_input">
          <label>💰 Bill value</label>
          <input
            type="text"
            className="custom_input2"
            value={bill}
            onChange={(e) => onBill(e)}
          ></input>
        </div>
        <div className="form_input">
          <label>🕴️ Your expense</label>
          <input
            type="text"
            className="custom_input2"
            value={expense}
            onChange={(e) =>
              Number(e.target.value) > bill ? null : onExpense(e)
            }
          ></input>
        </div>
        <div className="form_input">
          <label>🧑‍🤝‍🧑 {friend?.name}'s expense</label>
          <input
            type="text"
            className="custom_input2"
            disabled
            value={friendExpense}
          ></input>
        </div>
        <div className="form_input">
          <label>🤑 Who's paying the bill</label>
          <select
            className="custom_input2"
            value={whoIsPaying}
            onChange={(e) => onPaying(e.target.value)}
          >
            <option value="user">You</option>
            <option value="friend">{friend?.name}</option>
          </select>
        </div>
        <div className="splitbill-btn-container">
          <button className="btn splitbill">Split Bill</button>
        </div>
      </form>
      <button className="btn" onClick={() => onSplitOpen(false)}>
        CLose
      </button>
    </div>
  );
}
