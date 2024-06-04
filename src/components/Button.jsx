// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(prop) {
  return (
    <button
      css={css`
        font-size: large;
        width: 171.19px;
        height: 50px;
        border-radius: 4px;
        border: none;
        padding: 0px 16px 0px 16px;
        gap: 8px;
        color: #fff;
        background-color: ${prop.bgColor};
      `}
    >
      Large
    </button>
  );
}

export default Button;
