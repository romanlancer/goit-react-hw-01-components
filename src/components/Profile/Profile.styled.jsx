import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 250px;
  border-radius: 5px;
  border: 1px solid #e4e9ed;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-bottom: none;
`;

export const Avatar = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 50%;
`;

export const LineText = styled.p`
  color: #18202b;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  &.subtitle {
    color: #7c848a;
  }
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 4px;
  background-color: #f2f6f9;
  border-top: 1px solid #e4e9ed;
  border-right: 1px solid #e4e9ed;
  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  color: #7d848a;
`;

export const Quantity = styled.span`
  color: #253340;
`;
