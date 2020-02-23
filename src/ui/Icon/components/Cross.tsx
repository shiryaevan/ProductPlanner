import React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgCross(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 4.3l6 6 6-6c.2-.2.5-.3.8-.3.6 0 1.2.6 1.2 1.2 0 .3-.1.6-.3.8l-6 6 6 6c.2.2.3.5.3.8 0 .7-.6 1.2-1.2 1.2-.3 0-.6-.1-.8-.3l-5.9-6-6 6c-.3.2-.6.3-.9.3-.6 0-1.2-.6-1.2-1.2 0-.3.1-.6.3-.8l6-6-6-6c-.2-.2-.3-.5-.3-.8C4 4.6 4.6 4 5.2 4c.3 0 .6.1.8.3z" />
    </Svg>
  );
}

export default SvgCross;
