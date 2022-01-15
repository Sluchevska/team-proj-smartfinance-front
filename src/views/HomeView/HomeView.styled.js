import styled from "@emotion/styled";



export const Container = styled.div`
  min-width: 320px;
`;

export const HomeContainer = styled.div`

min-width: 320px;
   
    background-color: #F5F6FB;
   
   
    /* width: 100%; */
    height: 286px;
    border-radius: 0 0 0 180px;
    @media screen and (min-width: 768px) {
        width: 100%;
        height: 526px;
    }
   
    `;

    export const BcgImg = styled.div`
@media screen and (min-width: 768px){
    position: absolute;
    z-index: 20;
    background-image: url('../../icons/mnogoKapustDesktop.png');
    width: 83px;
    height: 89px;
    top: 104px;
    left: 271px;
    transform: rotate(-180deg);
 }
`;


