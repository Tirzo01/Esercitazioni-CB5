import "./index.css";

export function MenuBar() {
  return (
    <div className="MenuBar">
      <ul>
        <li>
          <img src="./img/home.png" alt="" />
          <p>Home</p>
        </li>
        <li>
          <img src="./img/upload.png" alt="" />
          <p>New</p>
        </li>
        <li>
          <span className="notfications">12</span>
          <img src="./img/messages.png" alt="" />
          <p>Messages</p>
        </li>
        <li>
          <img src="./img/profile.png" alt="" />
          <p>Profile</p>
        </li>
      </ul>
    </div>
  );
}
