import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import removeImage from "../../assets/remove.png";
import styles from "./index.module.scss";

export function NoteItem({ data }) {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleClick = () => {
    dispatch({ type: "REMOVE_NOTE", payload: data.id });
  };

  return (
    <div className={styles.main}>
      <div>
        <p>{data.content}</p>
        <button onClick={onHandleClick}>
          <img src={removeImage}></img>
        </button>
      </div>
    </div>
  );
}
