import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 20px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const UserPhotoContainer = styled.figure`
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
`;

export const UserReviewText = styled.p`
  text-align: center;
`;
