import React from 'react';

function FCar(props) {
  return <h2>Hi, I am a {props.color ?? 'red'} and model: {props.model ?? 'Mustang'} car</h2>
}

export default FCar;