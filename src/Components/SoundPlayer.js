import React from "react";

export const SoundPlayer = (props) => {
  return (
    <div>
      <audio src={props.fileUri} ref={props.innerRef} controls loop/>
    </div>
  );
}