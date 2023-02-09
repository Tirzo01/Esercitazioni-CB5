import { useReducer } from "react";
import "./App.css";
import { NoteList } from "./components/noteList/NoteList";
import { ApplicationCtx, initialState } from "./store";
import { generateID } from "./utils/utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        noteList: [
          ...state.noteList,
          { id: generateID(), content: action.payload },
        ],
      };
    case "REMOVE_NOTE":
      return {
        ...state,
        noteList: state.noteList.filter((item) => item.id != action.payload),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <ApplicationCtx.Provider value={{ state, dispatch }}>
      <div className="App">
        <NoteList />
      </div>
    </ApplicationCtx.Provider>
  );
}

export default App;
