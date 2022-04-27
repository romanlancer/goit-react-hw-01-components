import styled from '@emotion/styled';

export const Container = styled.section`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Item = styled.div`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;
