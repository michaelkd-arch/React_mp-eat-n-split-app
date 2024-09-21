import { useState } from "react";

export default function FormAddFriend({ onAddFriend, onIsAddFriendOpen }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAddFriendForm(e) {
    e.preventDefault();
    if (!name) return;

    const genRanHex = (size) =>
      [...Array(size)].map(() => Math.floor(Math.random() * 16));

    const id = genRanHex(16);

    const newFriend = {
      id: id,
      name: name,
      image: image,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <>
      <div className="formaddfriend">
        <form onSubmit={handleAddFriendForm}>
          <div className="form_input">
            <label>🧑‍🤝‍🧑 Friend name</label>
            <input
              type="text"
              className="custom_input1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form_input">
            <label>🖼️ Image URL</label>
            <input
              type="text"
              className="custom_input1"
              placeholder="https://i.pravatar.cc/48"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </div>
          <div className="addfriend-btn-container">
            <button className="btn addfriend-btn">Add friend</button>
          </div>
        </form>
      </div>
      <div className="close-btn-container">
        <button className="btn" onClick={() => onIsAddFriendOpen(false)}>
          CLose
        </button>
      </div>
    </>
  );
}
