import styled from "@emotion/styled";
// import imgDesc from "../../icons/euro_symbol.svg";


export const Container = styled.div`
width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Section = styled.div`
position: relative;
  background-color: #f5f6fb;
  overflow: hidden;
  height: 286px;
  border-radius: 0 0 0 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const BcgImg = styled.div`
@media screen and (min-width: 768px){
    position: absolute;
    z-index: 2;
    background-image: url('../../icons/kapustaLogoHPT.svg');
    width: 83px;
    height: 89px;
    top: 104px;
    left: 271px;
    transform: rotate(-180deg);
}
`;

export const BcgImgBottom = styled.div`
@media screen and (min-width: 768px){
     position: absolute;
    width: 83px;
    height: 89px;
    top: 425px;
    left: 35px;
    background-image: url('../../icons/2kapustaHPD.svg');
}
`;




export const BcgBottom = styled.svg`
@media screen and (min-width: 768px) {
z-index: -1;
position: fixed;
bottom: 56px;
right: 9%;
background-repeat: no-repeat;
background-image: url();
width: 183px;
height: 142px;
}
@media screen and (min-width: 1280px) {
z-index: -1;
bottom: 0;
right: 0;
background-image: url();
background-repeat: repeat;
width: 100%;
height: 23%;
}
`;