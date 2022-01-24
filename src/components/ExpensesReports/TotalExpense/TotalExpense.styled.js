import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  margin: 20px;
  height: 50px;
`;

export const ContainerMain = styled.div`
  display: flex;
  padding: 10px;
  text-align: end;
  margin-left: 20px;
  &:first-of-type {
    border-right: 1px solid #e0e5eb;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-right: 20px;
  color: #52555f;
`;

export const Income = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  color: #407946;
  letter-spacing: 0.04em;
`;

export const Expense = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  color: #e53935;
  letter-spacing: 0.04em;
  margin-right: 20px;
`;
