import styled from 'styled-components';

import WarningIcon from '../../svg/warning-icon/warning-icon';

export const Container = styled.div`
  margin-top: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 2rem;
  line-height: 2.5rem;
`;

export const Svg = styled(WarningIcon)`
  width: 50px;
  height: 50px;
`;
