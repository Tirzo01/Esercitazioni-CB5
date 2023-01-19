import { useEffect } from "react";
import { useState } from "react";
import { GET } from "../../utils/http";

import "./index.css";

export function Message({ post }) {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(false);

  useEffect(() => {
    GET(`users/${post.userId}`).then((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div className="Message">
      <img
        className="Message_Avatar_Img"
        src={user.image}
        alt={user.firstName}
      />
      <div className="Message_Body">
        <div className="Message_Text">
          <div className="Message_Text-Profile">
            <h4 className="Message_Text-Profile-Name">
              {`${user.firstName} ${user.lastName}`}
            </h4>
            <p className="Message_Text-Profile-Username">@{user.username}</p>
          </div>
          <p>{post.body}</p>
        </div>
        <div className="Message_Interactions">
          <button
            className="Message_Like_Btn"
            onClick={() => setLike((prev) => !prev)}
          >
            {" "}
            <img src={like ? "./img/liked.png" : "./img/like.png"} alt="Like" />
          </button>
          <p>{post.reactions}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
