import styled from 'styled-components';

import Link from '../../../../universal/buttons/link-to/link-to';

const LinkTo = styled(Link)`
  display: flex;
  align-items: center;

  & svg {
    margin-right: 5px;
  }
`;

export default LinkTo;
