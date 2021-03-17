import logo from "./logo.svg";
import "./App.css";
import { Title, ResourcesAsTable } from "@m0tivus/frontend-resources";
//import ResourcesAsTable from "./components/ResourcesAsTable";
import { SnackbarProvider } from "notistack";

function App() {
  const parentSelections = [];
  const resources = [
    { id: 1, name: "Jelbo", unit_price: 2121 },
    { id: 2, name: "Wera", unit_price: 121 },
  ];
  const model = {
    fields: [
      { name: "Nombre", field: "name" },
      { name: "Precio unitario", field: "unit_price", type: "currency" },
    ],
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Title />
        <div style={{ width: "1000px" }}>
          <SnackbarProvider>
            <ResourcesAsTable
              model={model}
              resources={resources}
              title="Test"
              parentSelections={parentSelections}
            />
          </SnackbarProvider>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
