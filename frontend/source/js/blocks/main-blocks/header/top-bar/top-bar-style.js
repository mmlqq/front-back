import styled from 'styled-components';

import SectionBlock from '../../../universal/blocks/section/section';

import { GRAY_COLOR, DEFAULT_PADDING } from '../../../styles-data/variables';

const Section = styled(SectionBlock)`
  position: relative;
  padding: 15px ${DEFAULT_PADDING};
  justify-content: space-between;
  background-color: ${GRAY_COLOR};
`;

export default Section;
