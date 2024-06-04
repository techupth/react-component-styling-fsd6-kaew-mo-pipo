// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Alert(props) {
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        border-radius: 10px;
        background-color: ${props.color};
        display: flex;
        justify-content: flex-start;
        align-items: start;
        margin: 20px;
      `}
    >
      <p
        css={css`
          font-size: 20px;
          font-weight: 700;
          line-height: 29.9px;
          text-align: left;
        `}
      >
        <img
          src={props.img}
          alt=""
          css={css`
            width: 24px;
            height: 24px;
            padding: 5px 10px 0 10px;
          `}
        />
        {props.detail}
      </p>
    </div>
  );
}
