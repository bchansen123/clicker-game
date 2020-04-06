import React from "react";
import "./index.css"

function Image (props) {
    return (
      <img src={props.image}
      className="pictures"
      onClick={() => props.activeState(props.imageId)} 
      /> 
    )
}

export default Image;