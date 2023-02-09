import { createContext } from "react";

const initialState = {
  noteList: [
    {
      id: 1,
      content: "Fare la lista della spesa",
    },
    {
      id: 2,
      content: "Fare esercizio di oggi",
    },
    {
      id: 3,
      content: "Far passeggiare il cane",
    },
    {
      id: 4,
      content: "Andare in palestra",
    },
    {
      id: 5,
      content: "Pagare la bolletta",
    },
  ],
};

const ApplicationCtx = createContext(initialState);

export { initialState, ApplicationCtx };
