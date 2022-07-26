import React, { useState } from "react";

import "./Button.css";
function Button() {
  const [bg, setbg] = useState("red");
  const [bcolor, setbcolor] = useState("white");
  const [tcolor, settcolor] = useState("black");
  const [tbutton, settbutton] = useState("Click Me");
  const clickfun = () => {
    setbg("purple");
    settbutton("Double-Click Me");
    settcolor("white");
    setbcolor("black");
  };
  const dclickfun = () => {
    setbg("red");
    settbutton("Click Me");
    settcolor("black");
    setbcolor("white");
  };
  return (
    <>
      <div style={{ backgroundColor: bg}} className="Button">
        <button
          onClick={clickfun} onDoubleClick = {dclickfun}
          style={{ backgroundColor: bcolor, color: tcolor }}
        >
          {tbutton}
        </button>
      </div>
    </>
  );
}

// function Button(props) {
//   return (
//     <>
// <div className="Button">
//     <button style={{backgroundColor:props.color, color: props.tcolor}}>{props.button}</button>
// </div>
//     </>
//   )
// }

export default Button;
