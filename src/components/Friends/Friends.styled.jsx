import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 0px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #557b83;
  border-radius: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const OnlineLabel = styled.div`
  width: 30px;
  height: 30px;

  background-color: ${p => (p.isOnline ? '#357C3C' : '#890F0D')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 40px;
  margin-left: 30px;
`;

export const Title = styled.span`
  margin-left: 10px;
`;
