import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="primary" />
        <Button type="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert status="error" />
        <Alert status="warning" />
        <Alert status="info" />
        <Alert status="success" />
      </div>
    </div>
  );
}

export default App;
