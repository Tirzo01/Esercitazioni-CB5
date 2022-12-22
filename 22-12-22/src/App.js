import "./App.css";
import { Layout } from "./layouts/container/layout/Layout";

function App() {
  return (
    <>
      <div className="App">
        <Layout
          children={{
            title: "Titolo prova",
            paragraph: "Paragrafo 123 lorem ipsum",
          }}
        />
      </div>
    </>
  );
}

export default App;
