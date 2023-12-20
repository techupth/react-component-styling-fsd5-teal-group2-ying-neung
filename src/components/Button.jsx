// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
function Button(props) {
  if (props.type === "Primary") {
    return (
      <button
       css={css`
		padding: 20px;
		background-color:#074EE8;
		fontSize: 24px;
		border: none;
		borderRadius: 5px;
		fontWeight: bold;
		textAlign: center;
		color:white;
    width:200px;
	 `}
      >
        Button
      </button>
    );
  } else if (props.type === 'Secondary') {
return (
  <button
   css={css`
padding: 20px;
background-color:#07A4E8;
fontSize: 24px;
border: none;
borderRadius: 5px;
fontWeight: bold;
textAlign: center;
color:white;
width:200px;
`}
  >
    Button
  </button>
);
  
  }  else if (props.type === 'Error') {
    return (
      <button
       css={css`
    padding: 20px;
    background-color:#DE5753;
    fontSize: 24px;
    border: none;
    borderRadius: 5px;
    fontWeight: bold;
    textAlign: center;
    color:white;
    width:200px;
    `}
      >
        Button
      </button>
    );
      
      }else if (props.type === 'Success') {
        return (
          <button
           css={css`
        padding: 20px;
        background-color:#26B795;
        fontSize: 24px;
        border: none;
        borderRadius: 5px;
        fontWeight: bold;
        textAlign: center;
        color:white;
        width:200px;
        `}
          >
            Button
          </button>
        );
          
          }

}

  export default Button