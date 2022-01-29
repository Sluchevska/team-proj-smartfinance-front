import styled from '@emotion/styled';
import logout from '../../icons/logout.svg';
import logo from '../../icons/logoHPD.svg';

export const ContainerHeader = styled.header`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  height: 56px;
   padding: 0 19px;
  @media screen and (min-width: 768px) {
    padding: 0 26px;
  }
  @media screen and (max-width: 767px) {

    top: 0;
  }
`;

export const Logo = styled.a`
  background-image: url(${logo});
  width: 90px;
  height: 31px;
  background-repeat: no-repeat;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 212px;
  }
`;
export const AvatarUser = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  background-color: #f5f6fa;
  border-radius: 50%;
  margin-right: 12px;
  overflow: hidden;
`;

export const AvatarTxt = styled.div`
  margin: auto;
`;

export const UserName = styled.p`
  color: #52555f;
  cursor: pointer;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Button = styled.button`
  display: flex;
  background: transparent;
  border: none;

  &:hover,
  &:active {
    cursor: pointer;
  }
`;
export const LogoutP = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  
    color: #52555f;

    &:hover {
      text-decoration: underline;
      cursor: pointer;

      color: #ff751d;
    }
  }
`;

export const LogoutSvg = styled.img`

  width: 16px;
  height: 16px;

  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const Line = styled.div`
  @media screen and (max-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 0px;
    height: 36px;
    float: left;
    border: 1px solid #e0e5eb;
  }
`;
