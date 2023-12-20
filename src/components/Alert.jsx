// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
function Alert(props) {
  if (props.text.includes("error")) {
    return (
        <>
      <div 
      css={css`
      display:flex;
      align-items:center;
      width: 650px;
      height: 50px;     
      background-color:#F9C8C8;
      border-radius: 10px;
      padding:15px;
      gap:15px;
      `}
      >
        <img css={css`;width:24px; height: 70px;`}src="./src/image/frown.svg" alt="frown" />
        <p 
        css={css`color: #444;
font-family: Kanit;
font-size: 20px;
font-weight: 500;
`}>This is {props.text} alert box</p>
      </div>
      </>
    );
  }else if (props.text.includes("warning")) {
    return (
        <>
      <div 
      css={css`
      display:flex;
      align-items:center;
      width: 650px;
      height: 50px;     
      background-color:#F9D9C8;
      border-radius: 10px;
      padding:15px;
      gap:15px;
      `}
      >
        <img css={css`;width:24px; height: 70px;`}src="./src/image/alert-triangle.svg" alt="alert-triangle" />
        <p 
        css={css`color: #444;
font-family: Kanit;
font-size: 20px;
font-weight: 500;
`}>This is {props.text} alert box</p>
      </div>
      </>
    );
  }else if (props.text.includes("info")) {
    return (
        <>
      <div 
      css={css`
      display:flex;
      align-items:center;
      width: 650px;
      height: 50px;     
      background-color:#F9EBC8;
      border-radius: 10px;
      padding:15px;
      gap:15px;
      `}
      >
        <img css={css`;width:24px; height: 70px;`}src="./src/image/alert-circle.svg" alt="alert-circle" />
        <p 
        css={css`color: #444;
font-family: Kanit;
font-size: 20px;
font-weight: 500;
`}>This is {props.text} alert box</p>
      </div>
      </>
    );
  }else if (props.text.includes("success")) {
    return (
        <>
      <div 
      css={css`
      display:flex;
      align-items:center;
      width: 650px;
      height: 50px;     
      background-color:#CEF7CD;
      border-radius: 10px;
      padding:15px;
      gap:15px;
      `}
      >
        <img css={css`;width:24px; height: 70px;`}src="./src/image/check-circle.svg" alt="check-circle" />
        <p 
        css={css`color: #444;
font-family: Kanit;
font-size: 20px;
font-weight: 500;
`}>This is {props.text} alert box</p>
      </div>
      </>
    );
  }
}

export default Alert;
