import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button title="Primary" color="#074ee8" />
        <Button title="Secondary" color="#07a4e8" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        {/* <img src={errorImg} alt="" /> */}
        <Alert
          detail="This is error alert box"
          color="#F9C8C8"
          img={"./icon/error.svg"}
        />
        <Alert
          detail="This is warning alert box"
          color="#F9D9C8"
          img={"./icon/alert.svg"}
        />
        <Alert
          detail="This is info alert box"
          color=" #F9EBC8"
          img={"./icon/info.svg"}
        />
        <Alert
          detail="This is success alert box"
          color="#CEF7CD"
          img={"./icon/success.svg"}
        />
      </div>
    </div>
  );
}

export default App;
