import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import { AddNote } from "../addNote/AddNote";
import { NoteItem } from "../noteItem/NoteItem";
import styles from "./index.module.scss";

export function NoteList() {
  const { state } = useContext(ApplicationCtx);

  return (
    <div className={styles.main}>
      <AddNote />
      {state.noteList.map((note) => (
        <NoteItem data={note} key={note.id} />
      ))}
    </div>
  );
}
