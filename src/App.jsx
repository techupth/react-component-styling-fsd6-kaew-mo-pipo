import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import frown from "./assets/frown.svg";
import alertCircle from "./assets/alert-circle.svg";
import checkCircle from "./assets/check-circle.svg";
import alertTriangle from "./assets/alert-triangle.svg";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  const emoji1 = <img src={frown} alt="" />;
  const emoji2 = <img src={alertCircle} alt="" />;
  const emoji3 = <img src={alertTriangle} alt="" />;
  const emoji4 = <img src={checkCircle} alt="" />;

  return (
    <div className="App">
      <div className="button-components-section">
        <div
          css={css`
            width: 331.11px;
            height: 140px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 40px;
          `}
        >
          <div
            css={css`
              display: flex;

              justify-content: space-between;
            `}
          >
            <div>Primary</div>
            <Button bgColor="#074EE8" />
          </div>
          <div
            css={css`
              display: flex;

              justify-content: space-between;
            `}
          >
            <div>Secondary</div>
            <Button bgColor="#07A4E8" />
          </div>
        </div>

        <div
          css={css`
            width: 331.11px;
            height: 140px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              display: flex;

              justify-content: space-between;
            `}
          >
            <div>Error</div>
            <Button bgColor="#DE5753" />
          </div>
          <div
            css={css`
              display: flex;

              justify-content: space-between;
            `}
          >
            <div>Success</div>
            <Button bgColor="#26B795" />
          </div>
        </div>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert
          alertBgColor="#F9C8C8"
          emoji={emoji1}
          article="This is error alert box"
        />
        <Alert
          alertBgColor="#F9D9C8"
          emoji={emoji3}
          article="This is error alert box"
        />
        <Alert
          alertBgColor="#F9EBC8"
          emoji={emoji2}
          article="This is error alert box"
        />
        <Alert
          alertBgColor="#CEF7CD"
          emoji={emoji4}
          article="This is error alert box"
        />
      </div>
    </div>
  );
}

export default App;
