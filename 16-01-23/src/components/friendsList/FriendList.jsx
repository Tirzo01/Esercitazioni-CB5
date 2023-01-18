import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { GET } from "../../utils/http";
import { Friend } from "../friend/Friend";

import "./index.css";

export function FriendList({ onClickedFriend }) {
  const [friends, setFriends] = useState([]);
  const friendBar = useRef(null);

  useEffect(() => {
    GET("users").then(({ users }) => {
      setFriends(users);
    });
  }, []);

  const moveRight = () => {
    friendBar.current.scrollBy({
      top: 0,
      left: 300,
      behavior: "smooth",
    });
  };

  const moveLeft = () => {
    friendBar.current.scrollBy({
      top: 0,
      left: -300,
      behavior: "smooth",
    });
  };

  return (
    <div className="FriendListContainer">
      <div className="FriendList" ref={friendBar}>
        {friends.map((item) => (
          <Friend
            friend={item}
            onClickedFriend={onClickedFriend}
            key={item.id}
          />
        ))}
      </div>
      <button className="prevFriendList" onClick={moveLeft}>
        &lt;
      </button>
      <button className="nextFriendList" onClick={moveRight}>
        &gt;
      </button>
    </div>
  );
}
