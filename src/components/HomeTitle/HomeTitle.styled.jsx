import styled from '@emotion/styled';
import logo from '../../icons/kapustaLogoHPM.svg';
import logoTab from '../../icons/kapustaLogoHPT.svg';
import logoDesc from '../../icons/kapustaLogoHPD.svg';
import mnogoKup from '../../icons/mnogoKapDesk.svg';
import mnogoKupMob from '../../icons/mnogoKapustMobile.svg';

export const HeroContainer = styled.div`
  padding-top: 104px;
  padding-left: 271px;

  @media screen and (min-width: 768px) {
    padding-top: 28px;
    padding-left: 10px;
  }
`;
export const HeroKapustaSvg = styled.svg`
  background-image: url(${mnogoKupMob});
  background-repeat: no-repeat;

  @media screen and (min-width: 321px) {
    background-image: url(${mnogoKup});
    background-repeat: repeat;
    width: 100%;
    height: 232px;
  }
`;

export const HeroTitle = styled.svg`
  width: 183px;
  height: 46px;

  background-image: url(${logo});
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    width: 306px;
    height: 77px;
    background-image: url(${logoTab});
  }
  @media screen and (min-width: 1280px) {
    width: 377px;
    height: 120px;
    background-image: url(${logoDesc});
  }
`;

export const HeroText = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #52555f;
  padding-left: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.18em;
    padding-left: 50px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 70px;
  }
`;

export const HeroTitleContainer = styled.div`
  position: absolute;
  top: 142px;
  right: 88px;

  @media screen and (min-width: 768px) {
    top: 146px;
    left: 171px;
  }

  @media screen and (min-width: 1280px) {
    position: static;
    padding-top: 48px;
    padding-left: 230px;
  }
`;
