import React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgHamburger(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4.5 7h15c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-15c-.3 0-.5.2-.5.5s.2.5.5.5zm0 11h15c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-15c-.3 0-.5.2-.5.5s.2.5.5.5zm0-5.5h15c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-15c-.3 0-.5.2-.5.5s.2.5.5.5z" />
    </Svg>
  );
}

export default SvgHamburger;
