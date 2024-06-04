/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  let bgColor;
  if (props.type === "primary") {
    bgColor = "hsla(221, 94%, 47%, 1)";
  } else if (props.type === "secondary") {
    bgColor = "hsla(198, 94%, 47%, 1)";
  }
  return (
    <button
      css={css`
        width: 171.9px;
        height: 50px;
        color: white;
        padding: 0px 16px;
        background-color: ${bgColor};
      `}
    >
      Button
    </button>
  );
}
