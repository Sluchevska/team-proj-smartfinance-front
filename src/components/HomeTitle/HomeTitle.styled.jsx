import styled from '@emotion/styled';
import logo from "../../icons/kapustaLogoHPM.svg";
import logoTab from "../../icons/kapustaLogoHPT.svg";
import logoDesc from "../../icons/kapustaLogoHPD.svg";

export const HeroContainer = styled.div`
/* width: 183px;
height: 63px;
@media screen and (min-width: 768px) {
width: 306px;
height: 100px;
  }
@media screen and (min-width: 1280px) {
width: 377px;
height: 139px;
  } */

  padding-left: 49px;
 padding-top: 86px;
  background-image: url('../../icons/mnogoKapustDesktop.png');
  @media screen and (min-width: 768px) {
    
    padding-top: 90px;
    padding-left: 171px;
  }
@media screen and (min-width: 1280px) {
    
    padding-top: 308px;
    padding-left: 230px;
  }
`;

export const HeroTitle = styled.svg`

width: 183px;
height: 46px;
/* margin-left: 49px;
 margin-top: 86px; */
background-image: url(${logo});
background-repeat: no-repeat;
@media screen and (min-width: 768px) {
    width: 306px;
    height: 77px;
    background-image: url(${logoTab});
    /* margin-top: 90px;
    margin-left: 171px; */
  }
@media screen and (min-width: 1280px) {
    width: 377px;
    height: 120px;
    background-image: url(${logoDesc});
    /* margin-top: 308px;
    margin-left: 230px; */
  }
`;


export const HeroText = styled.h3`
font-weight: bold;
font-size: 13px;
line-height: 15px;
letter-spacing: 0.15em;
text-transform: uppercase;
color: #52555F;
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



