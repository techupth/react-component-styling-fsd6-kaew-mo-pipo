// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: start;
        text-align: left;
        width:331.11px
        height: 140px;
        `}
    >
      <p
        css={css`
          font-size: 20px;
          width: 147px;
          height: 18px;
        `}
      >
        {props.title}
      </p>
      <button
        css={css`
          background-color: ${props.color};
          color: white;
          width: 171.19px;
          height: 50px;
          font-size: 16px;
          font-weight: 400;
          line-height: 18px;
        `}
      >
        Large
      </button>
    </div>
  );
}
