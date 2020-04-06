import React from "react";

function Scorebox (props) {
    return (
      <div>
          Current Score: {props.totalScore} High Score: {props.highScore}
      </div>
    )
}

export default Scorebox;