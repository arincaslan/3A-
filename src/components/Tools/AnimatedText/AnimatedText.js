import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from '@emotion/styled';

const shake = `
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }

  &:hover {
    animation: shake 0.3s ease-in-out infinite;
  }
`;

const AnimatedStyledDiv = styled(animated.div)`
  ${shake}
`;

function AnimatedText({ children , position }) {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-100px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' }
  });

  return <AnimatedStyledDiv  style={{ ...styles, position: 'absolute', ...position }} >{children}</AnimatedStyledDiv>;
}

export default AnimatedText;
