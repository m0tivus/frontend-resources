import logo from "./logo.svg";
import "./App.css";
import { Title, asPage } from "@m0tivus/frontend-resources";

import ResourcesAsTable from "./lib/ResourcesAsTable";
//import asPage from "./lib/asPage";

import { SnackbarProvider } from "notistack";

import { ThemeProvider, useTheme } from "@material-ui/core";

const Page = asPage({ title: "pagina de prueba" })(ResourcesAsTable);

function App() {
  const theme = useTheme();
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
        <ThemeProvider theme={theme}>
          <div style={{ width: "100%" }}>
            <SnackbarProvider>
              <Page
                model={model}
                resources={resources}
                title="Test"
                parentSelections={parentSelections}
              />
            </SnackbarProvider>
          </div>
        </ThemeProvider>
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
