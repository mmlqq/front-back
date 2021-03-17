import styled, { keyframes } from 'styled-components';

import ToSubsectionIcon from '../../../svg/to-subsection-icon/to-subsection-icon';

const walk = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(30px);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const Svg = styled(ToSubsectionIcon)`
  width: 50px;
  height: 50px;
  animation: ${walk} 1s steps(3) infinite;
`;
