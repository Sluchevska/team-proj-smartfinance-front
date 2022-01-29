import styled from '@emotion/styled';
import arrowR from '../../../icons/arrow-right.svg';
import arrowL from '../../../icons/arrow-left.svg';

export const Container = styled.div`
  display: grid;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    margin-bottom: 0;
    display: block;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const Title = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
  color: rgba(82, 85, 95, 0.7);
`;

export const Month = styled.p`
  margin: 0;
  padding: 0 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  width: 150px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconLeft = styled.svg`
  width: 15px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  background-image: url(${arrowL});
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
`;

export const IconRigth = styled.svg`
  width: 15px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  background-image: url(${arrowR});
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
`;
