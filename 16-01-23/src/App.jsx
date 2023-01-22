import { useState } from "react";
import "./App.css";
import { FriendList } from "./components/friendsList/FriendList";
import { MenuBar } from "./components/menuBar/MenuBar";
import MessageList from "./components/messageList";
import Modal from "./components/modal";

function App() {
  const [isModalActive, setModalActive] = useState(false);
  const [storyUrl, setStoryUrl] = useState("");
  const onClickedFriend = (imageUrl) => {
    setStoryUrl(imageUrl);
    setModalActive(true);
  };
  return (
    <div className="App">
      {isModalActive && (
        <Modal setModalActive={setModalActive}>
          <img src={storyUrl} alt="" />
        </Modal>
      )}
      <MenuBar />
      <div className="mainContainer">
        <FriendList onClickedFriend={onClickedFriend} />
        <MessageList />
      </div>
    </div>
  );
}

export default App;
