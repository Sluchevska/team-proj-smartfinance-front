import styled from '@emotion/styled';
import mnogoKup from '../../icons/mnogoKapDesk.svg';

export const ContainerMain = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  margin: 20px;
`;

export const Container = styled.div`
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
`;

export const BottomKapusta = styled.div`
  
 
    @media screen and (min-width: 1280px){
      position: absolute;
        z-index: -1;
   background-image: url(${mnogoKup});
    background-repeat: repeat;
    width: 100%;
    height: 232px;
    top: 719px;
    }
`;
