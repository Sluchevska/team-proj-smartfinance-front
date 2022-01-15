import styled from "@emotion/styled";
import oneKap from "../../icons/oneKapusta.svg";
import twoKap from "../../icons/2kapustaHPD.svg";




export const Container = styled.div`
  min-width: 320px;
  /* position: relative; */
`;

export const HomeContainer = styled.div`

    background-color: #F5F6FB;
   
    height: 286px;
    border-radius: 0 0 0 180px;
    @media screen and (min-width: 768px) {
        width: 100%;
        height: 526px;
    }
   
    `;

    export const BottomContainer = styled.div`

    height: 514px;
  position: relative;
    @media screen and (min-width: 768px) {
       height: 442px;
    }
    @media screen and (min-width: 1280px){
        height: 268px;
    }
   
    `;




export const BottomKapusta = styled.div`
  position: absolute;
    width: 83px;
    height: 89px;
    top: 525px;
    left: 35px;
   
    background-image: url(${oneKap});
       @media screen and (min-width: 768px){
        position: absolute;
    z-index: 3;
    width: 183px;
    height: 142px;
    top: 56%;
    left: 13%;
    background-image: url(${twoKap});
    }

    @media screen and (min-width: 1280px){
      width: 183px;
    height: 142px;
    left: 230px;
    top: 76px;  
    }
`;

