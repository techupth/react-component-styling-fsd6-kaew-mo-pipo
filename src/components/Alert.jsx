/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import error from "./icons/frown.png";
import warning from "./icons/alert-triangle.png";
import info from "./icons/alert-circle.png";
import success from "./icons/check-circle.png";

export function Alert(props) {
  let bgColor;
  let message;
  let icon;
  if (props.status === "error") {
    bgColor = "hsla(360, 80%, 88%, 1)";
    message = "error";
    icon = error;
  } else if (props.status === "warning") {
    bgColor = "hsla(22, 80%, 88%, 1)";
    message = "warning";
    icon = warning;
  } else if (props.status === "info") {
    bgColor = "hsla(43, 80%, 88%, 1)";
    message = "info";
    icon = info;
  } else if (props.status === "success") {
    bgColor = "hsla(119, 74%, 89%, 1)";
    message = "success";
    icon = success;
  }
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        color: black;
        border-radius: 10px;
        background-color: ${bgColor};
        display: flex;
        font-weight: 700;
        align-items: center;
        padding-left: 20px;
        gap: 20px;
      `}
    >
      <img
        css={css`
          width: 24px;
          height: 24px;
        `}
        src={icon}
      ></img>
      <span>This is {message} alert box</span>
    </div>
  );
}
