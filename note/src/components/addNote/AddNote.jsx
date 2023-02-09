import { useContext, useState } from "react";
import { ApplicationCtx } from "../../store";

import styles from "./index.module.scss";

export function AddNote() {
  const { state, dispatch } = useContext(ApplicationCtx);

  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", payload: content });
    setContent(() => "");
  };
  return (
    <div className={styles.main}>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Scrivi..."
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <button>+ Add a Note</button>
      </form>
    </div>
  );
}
