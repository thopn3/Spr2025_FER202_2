import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import {DataProvider} from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <h1>React Context Example</h1>
      <ComponentA />
      <ComponentB />
    </DataProvider>
  );
}

export default App;
