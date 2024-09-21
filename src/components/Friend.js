export default function Friend({ friend, selectedFriend, onSelectedFriend }) {
  const curFriend = friend;

  return (
    <div
      className={`container__item ${
        friend.id === selectedFriend?.id ? "selected" : ""
      }`}
    >
      <div>
        <img
          className="container__item-img"
          src={friend.image}
          alt="avatar"
        ></img>
        <div className="container__item-box">
          <h3 className="container__item-name">{friend.name}</h3>
          <p
            className="container__item-description"
            style={{
              color:
                friend.balance < 0
                  ? "red"
                  : friend.balance > 0
                  ? "#00C000"
                  : "grey",
            }}
          >
            {friend.balance < 0
              ? `You owe ${friend.name} ${friend.balance}$`
              : friend.balance > 0
              ? `${friend.name} owes you ${friend.balance}$`
              : `You and ${friend.name} are even`}
          </p>
        </div>
      </div>
      <button className="btn" onClick={() => onSelectedFriend(curFriend)}>
        Select
      </button>
    </div>
  );
}
