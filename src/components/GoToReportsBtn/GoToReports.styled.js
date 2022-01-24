import styled from '@emotion/styled';
import gotobtn from '../../icons/gotoreportbtn.svg';

export const GoToSvg = styled.svg`
  background-image: url(${gotobtn});
  width: 24px;
  height: 24px;
  margin-left: 15px;
  display: flex;
  &:hover,
  &:active {
    color: #ff751d;
    fill: #ff751d;
  }
`;

export const GoToText = styled.p`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  padding: 0;
  margin: 0;
  text-decoration: none;
  &:hover,
  &:active {
    color: #ff751d;
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 0;
    width: 154px;
    height: 24px;
    align-items: center;
    /* 
    margin-left: 111px; */
  }
  @media screen and (min-width: 1280px) {
    /* margin-left: 205px; */
  }
`;

export const HolderStyle = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    @media screen and (min-width: 1280px) {
    }
  }
`;
