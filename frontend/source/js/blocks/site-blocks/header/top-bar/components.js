import styled from 'styled-components';

import { GRAY_COLOR, DEFAULT_PADDING } from '../../../universal/styles-data/variables';

const Section = styled.section`
  position: relative;
  margin-bottom: 30px;
  padding: 15px ${DEFAULT_PADDING};
  justify-content: space-between;
  background-color: ${GRAY_COLOR};
`;

export default Section;
