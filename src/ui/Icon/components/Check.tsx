import React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgCheck(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9.9 18.1c-.2 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.3.4-.4 1-.4 1.3 0l4.3 4.3 8.5-9.6c.3-.4.9-.4 1.3-.1.4.3.4.9.1 1.3l-9.2 10.3c-.1.3-.3.4-.6.4z" />
    </Svg>
  );
}

export default SvgCheck;
