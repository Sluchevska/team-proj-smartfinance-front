import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  margin: 20px;
  height: 85px;

  @media (min-width: 768px) {
    height: 50px;
    margin: 40px 50px 0;
  }
  @media (min-width: 1280px) {
    margin: 40px 0 20px;
  }
`;

export const ContainerMain = styled.div`
display: block;  
text-align: center;
padding: 10px;
&:first-of-type {
  border-right: 1px solid #e0e5eb;
}

@media (min-width: 768px) {
  display: flex;
  text-align: end;
  margin-left: 20px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #52555f;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    margin-right: 20px;
  }
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

  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;
