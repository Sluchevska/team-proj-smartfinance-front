import styled from '@emotion/styled';
import logo from "../../icons/euro-795.svg";

export const HeroLogo = styled.div`
width: 183px;
height: 63px;
@media screen and (min-width: 768px) {
width: 306px;
height: 100px;
  }
@media screen and (min-width: 1280px) {
width: 377px;
height: 139px;
  }
`;

// export const HeroTitle = styled.svg`
// width: 183px;
// height: 46px;
// background-image: url(${logo});
// background-repeat: no-repeat;
// @media screen and (min-width: 768px) {
//     width: 306px;
//     height: 77px;
//     background-image: url(${logo});
//   }
// @media screen and (min-width: 1280px) {
//     width: 377px;
//     height: 120px;
//     background-image: url(${logo});
//   }
  
// `;
export const HeroTitle = styled.h1`
font-weight: bold;

padding-left: 49px;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.18em;

color: #000;

@media screen and (min-width: 768px) {
font-size: 102px;
line-height: 120px;
padding-left: 161px;
}
@media screen and (min-width: 1280px) {
padding-left: 230px;
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



