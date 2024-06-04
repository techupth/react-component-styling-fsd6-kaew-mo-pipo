// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(prop) {
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        background-color: ${prop.alertBgColor};
        border-radius: 10px;
        display: flex;
        align-items: center;
      `}
    >
      <div
        css={css`
          margin-left: 20px;
          font-size: 20px;
          font-weight: 700;
          display: flex;
          gap: 20px;
        `}
      >
        {prop.emoji}
        {prop.article}
      </div>
    </div>
  );
}

export default Alert;
