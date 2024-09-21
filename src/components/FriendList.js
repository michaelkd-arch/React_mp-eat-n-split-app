import Friend from "./Friend";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

const initalFriends = [
  {
    id: "63e6bb6b-4e71-43f2-9eb4-5ebe3e43880b",
    name: "John",
    image: `https://i.pravatar.cc/48?u=63e6bb6b-4e71-43f2-9eb4-5ebe3e43880d`,
    balance: -7,
  },
  {
    id: "046a1ff9-a386-4a64-9db1-9b79fe9da655",
    name: "Clara",
    image: `https://i.pravatar.cc/48?u=046a1ff9-a386-4a64-9db1-9b79fe9da65b`,
    balance: 20,
  },
  {
    id: "f241bede-26c4-4ca6-9f9c-3211e0cd342c",
    name: "Jessica",
    image: `https://i.pravatar.cc/48?u=f241bede-26c4-4ca6-9f9c-3211e0cd342q`,
    balance: 0,
  },
];

export default function FriendList() {
  const [friends, setFriedns] = useState(initalFriends);
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [bill, setBill] = useState(0);
  const [expense, setExpense] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const [isSplitOpen, setIsSplitOpen] = useState(false);

  const friendExpense = bill - expense;
  const deltaExpense = whoIsPaying === "user" ? friendExpense : -expense;

  function handleAddFriend(friend) {
    setFriedns([...friends, friend]);
  }

  function handleSelectedFriend(friend) {
    if (friend.id === selectedFriend?.id && isSplitOpen) {
      setIsSplitOpen(false);
      setSelectedFriend(null);
    } else {
      setSelectedFriend(friend);
      handleIsSplitOpen(true);
    }
  }

  function handleBill(e) {
    setBill(Math.abs(Number(e.target.value)));
  }

  function handleExpense(e) {
    setExpense(Math.abs(Number(e.target.value)));
  }

  function handlePaying(who) {
    setWhoIsPaying(who);
  }

  function handleSplitBill(e) {
    e.preventDefault();
    if (!bill || !selectedFriend) return;

    setFriedns(
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + deltaExpense }
          : friend
      )
    );
    setBill(0);
    setExpense(0);
    setIsSplitOpen(false);
  }

  function handleIsAddFriendOpen(bool) {
    setIsAddFriendOpen(bool);
    setIsSplitOpen(false);
    setSelectedFriend(null);
  }

  function handleIsSplitOpen(bool) {
    setIsSplitOpen(bool);
    setIsAddFriendOpen(false);
    if (!bool) setSelectedFriend(null);
  }

  return (
    <div className="main">
      <div>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            onSelectedFriend={handleSelectedFriend}
          />
        ))}
        {isAddFriendOpen ? (
          <FormAddFriend
            onAddFriend={handleAddFriend}
            onIsAddFriendOpen={handleIsAddFriendOpen}
          />
        ) : (
          <div className="addfriend-btn2">
            <button className="btn" onClick={() => handleIsAddFriendOpen(true)}>
              Add friend
            </button>
          </div>
        )}
      </div>
      {isSplitOpen && (
        <FormSplitBill
          friend={selectedFriend}
          bill={bill}
          onBill={handleBill}
          expense={expense}
          onExpense={handleExpense}
          friendExpense={friendExpense}
          whoIsPaying={whoIsPaying}
          onPaying={handlePaying}
          onSplitBill={handleSplitBill}
          onSplitOpen={handleIsSplitOpen}
        />
      )}
    </div>
  );
}
